'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 651px)').addEventListener('change', closeMenu);

const dialog = document.querySelector('#inquiry-dialog');
const form = document.querySelector('#inquiry-form');
const status = document.querySelector('#inquiry-status');
const submitLabel = document.querySelector('#inquiry-submit-label');
const inquiryControls = form.querySelectorAll('input, select, textarea, button[type="submit"]');
let inquiryOpener = null;
let isSubmitting = false;

document.querySelectorAll('[data-inquiry]').forEach(button => {
  button.addEventListener('click', () => {
    inquiryOpener = button;
    closeMenu();
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  const isBackdrop = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (isBackdrop) dialog.close();
});
dialog.addEventListener('close', () => {
  if (inquiryOpener?.offsetParent !== null) inquiryOpener?.focus();
  else menuToggle.focus();
});

function setSubmitting(pending) {
  isSubmitting = pending;
  form.setAttribute('aria-busy', String(pending));
  inquiryControls.forEach(control => { control.disabled = pending; });
  submitLabel.textContent = pending ? 'Sending…' : 'Send request';
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  if (isSubmitting) return;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  if (!data.get('name').trim() || !data.get('message').trim()) {
    status.textContent = 'Please add your name and a few details about your project.';
    form.elements[!data.get('name').trim() ? 'name' : 'message'].focus();
    return;
  }
  if (!['http:', 'https:'].includes(window.location.protocol)) {
    status.textContent = 'To send a request, open this website through its web address. You can also use the email link below.';
    return;
  }
  // The recipient is configured in the form action. No private keys belong here.
  // FormSubmit requires the owner to confirm their email before delivery begins.
  const payload = Object.fromEntries(data.entries());
  payload.name = payload.name.trim();
  payload.email = payload.email.trim();
  payload.message = payload.message.trim();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20000);
  let activationRequired = false;
  setSubmitting(true);
  status.textContent = 'Sending your request…';
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      credentials: 'omit',
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    if (!response.ok) throw new Error('Submission failed');
    const result = await response.json();
    activationRequired = /activat/i.test(result.message || '');
    if (activationRequired || (result.success !== true && result.success !== 'true')) {
      throw new Error('Submission not confirmed');
    }
    form.reset();
    status.textContent = 'Thanks! Your request has been sent. I’ll reply to the email you provided.';
  } catch {
    status.textContent = activationRequired
      ? 'This form is awaiting email confirmation. Please use the email link below to contact me directly for now. Your details are still here.'
      : 'We couldn’t confirm that your request was sent. Your details are still here. Please try again, or use the email link below.';
  } finally {
    window.clearTimeout(timeout);
    setSubmitting(false);
  }
});
