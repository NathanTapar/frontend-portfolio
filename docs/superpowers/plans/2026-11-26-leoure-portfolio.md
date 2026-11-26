# Leoure Portfolio Implementation Plan

> **For agentic workers:** Execute the isolated demo task with a subagent and integrate it with the portfolio in this session. Steps use checkbox syntax for tracking.

**Goal:** Build the approved editable sample portfolio and one working concept demo.

**Architecture:** Static HTML pages with shared local assets and independent page styles. Portfolio behavior uses a small deferred JavaScript file; the demo is a self-contained subdirectory.

**Tech Stack:** HTML, CSS, JavaScript; Python local server and browser verification tools for QA only.

**Spec:** docs/superpowers/specs/2026-11-26-leoure-design.md

## Global Constraints
- Leoure is the sole supplied public identity. Do not invent personal details or claims.
- One concept project, explicitly labeled, with a real local demo link.
- Plain HTML, CSS, and JavaScript; no runtime build or framework.
- Pale blue quiet studio style; accessible mobile and desktop navigation.
- No message delivery claim without a delivery service.

## Task 1: Original live demo
- [x] Create demo/index.html, demo/demo.css, demo/demo.js, and any assets under demo/assets/. Build Stillday, a fictional coffee studio landing page with functional menu filtering, in-page navigation, a clear concept notice, and a portfolio return link. Use original local artwork.
- [x] Verify HTML structure, paths, script syntax, mobile layout, and menu interactions.

## Task 2: Portfolio
- [x] Create index.html and styles.css with hero, project showcase, services, about, contact, and inquiry dialog.
- [x] Create site.js for mobile navigation, inquiry creation/copy fallback, and project-details expansion. Keep the contact recipient configurable and empty by default.
- [x] Create local favicon, project preview assets, and README.md with startup/customization instructions.

## Task 3: Integration and verification
- [x] Serve locally, create a screenshot of the actual demo for the showcase, and review desktop/mobile screenshots.
- [x] Verify menu behavior, all local links/assets, native validation, inquiry copy and fallback, dialog focus/Escape, and reduced motion. Record measured results.
- [x] Conduct an independent code/content review, fix material issues, and show the local preview.

## Progress
- Design approved in chat on November 26, 2026.
- Workspace initially empty and not a Git repository; files are created in place with no Git operations.

- Implementation and verification complete; see docs/superpowers/verification.md.
