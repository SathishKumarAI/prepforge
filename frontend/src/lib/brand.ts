/**
 * The product's name, once. The sidebar brand block and the document title
 * read it from here, so a rename is one
 * edit and can never leave the tab saying one thing and the nav another.
 *
 * "Recall" replaced "PrepForge" on 2026-09-07 (COD-154): the name should say
 * what the app does. Everything a person reads says Recall since 2026-09-08;
 * the GitHub repo and every key on disk (localStorage `prepforge:`, the
 * IndexedDB names, a backup's `app` field) keep the old name so nothing that
 * was saved stops loading. This constant is the UI's only source of the name.
 */
export const APP_NAME = "Recall";
export const APP_TAGLINE = "AI/ML interview prep";
