export const load = async () => {
  const faqs = await getFaqs();
  const friends = await getFriends();

  if (!faqs.length || !friends.length) {
    return { status: 404 };
  }

  return { faqs, friends };
}

const getFriends = async () => {
  const allFriendFiles = await import.meta.glob('../content/friends/*.{svx,md}', { eager: true });
  const allFriends = Object.entries(allFriendFiles).map(([path, module]) => {
    const friendPath = path.slice(16, -3)
    const { html } = module.default.render();
    return { ...module.metadata, html, path: friendPath };
  });
  return allFriends.sort((a, b) => a.day - b.day);
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