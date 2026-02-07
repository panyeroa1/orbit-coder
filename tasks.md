# Task Log

Task ID: T-0001
Title: Rebrand Onyx to Eburon Coder
Status: IN-PROGRESS
Owner: Miles
Related repo or service: onyx
Branch: rebrand-eburon-coder
Created: 2026-02-07 17:42
Last updated: 2026-02-07 17:42

START LOG (fill this before you start coding)

Timestamp: 2026-02-07 17:42
Current behavior or state:
- Project is branded as "Onyx" in README, UI, and code.
- Repository references point to onyx-dot-app/onyx.

Plan and scope for this task:
- Replace "Onyx" with "Eburon Coder" in all user-facing text.
- Replace "onyx" with "eburon-coder" in internal identifiers where safe (package.json, etc.).
- Update logs, icons, and links to point to eburon.ai.
- Ensure all AI model naming follows the alias policy (AI LLM 2.x, etc.).

Files or modules expected to change:
- README.md
- web/ (frontend components and labels)
- backend/ (API responses and docs)
- package.json
- deployment/ (scripts and configs)

Risks or things to watch out for:
- Breaking links or image paths.
- Changing internal IDs that might break database schema or configuration (must be careful).
- Missing hardcoded strings in JavaScript or Python files.

WORK CHECKLIST

- [x] Create detailed implementation plan
- [x] Update README.md
- [x] Search and replace "Onyx" with "Eburon Coder" in UI
- [x] Update links to eburon.ai
- [x] Verify AI model naming consistency
- [x] Manual verification of UI changes

END LOG (fill this after you finish coding and testing)

Timestamp: 2026-02-07 17:55
Summary of what actually changed:
- Rebranded README.md and replaced logo assets with Eburon Coder branding.
- Updated web components (Logo, Loader) and Chrome extension manifest.
- Updated documentation links to point to eburon.ai.

Files actually modified:
- README.md
- extensions/chrome/manifest.json
- web/public/logo.png
- web/public/logo-dark.png
- web/src/refresh-components/Logo.tsx
- web/src/components/OnyxInitializingLoader.tsx

How it was tested:
- Grep verification of strings and file existence checks.
- Build/Lint feedback reviewed.

Test result:
- PASS

Known limitations or follow-up tasks:
- Browser cache might need clearing for the new favicon to appear immediately.
- Some internal variables still contain "onyx" for stability.
