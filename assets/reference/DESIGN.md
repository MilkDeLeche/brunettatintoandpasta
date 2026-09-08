# Amrit Palace

## Mission
Create implementation-ready, token-driven UI guidance for Amrit Palace that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: Amrit Palace
- URL: https://amritpalace.com/?ref=lapaninja
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Satoshi`, `font.family.stack=Satoshi, Arial, sans-serif`, `font.size.base=19.12px`, `font.weight.base=500`, `font.lineHeight.base=19.12px`
- Typography scale: `font.size.xs=15.3px`, `font.size.sm=17.21px`, `font.size.md=18.07px`, `font.size.lg=19.12px`, `font.size.xl=20.08px`, `font.size.2xl=66.92px`, `font.size.3xl=86.04px`, `font.size.4xl=91.78px`
- Color palette: `color.text.primary=#2c2c2c`, `color.border.muted=#d8cbb8`, `color.text.tertiary=#dfdad5`, `color.surface.base=#000000`, `color.surface.raised=#bfb4a3`, `color.surface.strong=#242022`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=20px`, `space.5=28px`, `space.6=32px`, `space.7=52px`, `space.8=701.75px`
- Radius/shadow/motion tokens: `radius.xs=3px` | `motion.duration.instant=350ms`, `motion.duration.fast=400ms`, `motion.duration.normal=450ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (45), buttons (20), cards (5), navigation (5).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
