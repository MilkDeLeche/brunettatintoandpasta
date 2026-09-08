/**
 * Wires a <details>-based mobile nav so it toggles reliably.
 *
 * Safari/WebKit has a long-standing bug: when a <summary> has
 * `display: flex | grid` (or otherwise non-default) and the tap lands on a
 * child element, the <details> does NOT toggle. Every mobile nav in this
 * project styles its <summary>, so we take over the toggle in JS.
 */
interface Options {
  /** Close the nav when a link inside the panel (or a [data-close] control) is clicked. */
  closeOnLinkClick?: boolean;
  /** Lock <body> scroll while the nav is open (for full-screen drawers). */
  lockScroll?: boolean;
  /** Selector for the panel when it lives OUTSIDE the <details> (e.g. a drawer). */
  panelSelector?: string;
}

export function wireMobileNav(selector: string, opts: Options = {}): void {
  const mob = document.querySelector<HTMLDetailsElement>(selector);
  if (!mob) return;
  const summary = mob.querySelector("summary");
  const panel = opts.panelSelector
    ? document.querySelector<HTMLElement>(opts.panelSelector)
    : mob;

  summary?.addEventListener("click", (event) => {
    event.preventDefault();
    mob.open = !mob.open;
  });

  const close = () => {
    mob.open = false;
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mob.open) {
      close();
      summary?.focus();
    }
  });

  // Click-outside only makes sense for an in-flow dropdown, not a full-screen drawer.
  if (!opts.panelSelector) {
    document.addEventListener("click", (event) => {
      if (mob.open && event.target instanceof Node && !mob.contains(event.target)) close();
    });
  }

  if (opts.closeOnLinkClick && panel) {
    panel.querySelectorAll<HTMLElement>("a, [data-close]").forEach((el) =>
      el.addEventListener("click", close)
    );
  }

  if (opts.lockScroll) {
    new MutationObserver(() => {
      document.body.style.overflow = mob.open ? "hidden" : "";
    }).observe(mob, { attributes: true, attributeFilter: ["open"] });
  }
}
