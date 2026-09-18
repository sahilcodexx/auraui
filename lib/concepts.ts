const LAUNCH_CONCEPT_SLUGS = new Set([
  "tabular-numbers",
  "optical-alignment",
  "noise",
  "nested-border-radius",
  "html-background",
  "hover-restraint",
  "image-outlines",
]);

/** True only for concepts that are live in production. */
export function isConceptLaunched(slug: string) {
  return LAUNCH_CONCEPT_SLUGS.has(slug);
}

// Unlaunched concepts are enabled everywhere (sidebar, command menu, pages,
// sitemap, llms.txt, OG images) during local development only.
export function isConceptAvailable(slug: string) {
  if (process.env.NODE_ENV === "development") return true;
  return isConceptLaunched(slug);
}
