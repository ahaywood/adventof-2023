export const load = async () => {
  const faqs = await getFaqs();

  if (!faqs.length) {
    return { status: 404 };
  }

  return { faqs };
}


const getFaqs = async () => {
  const allFaqFiles = await import.meta.glob('../content/faqs/*.{svx,md}', { eager: true });
  const allFaqs = Object.entries(allFaqFiles).map(([path, module]) => {
    const faqPath = path.slice(16, -3); // remove the leading `../content/faqs/` and the trailing `.md`
    const { html } = module.default.render();
    return { ...module.metadata, answer: html, path: faqPath };
  });
  return allFaqs.sort((a, b) => a.order - b.order);
}