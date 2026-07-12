---
qid: q049
question: "How does the Naive Bayes classifier work and what is the 'naive' assumption?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** We needed a fast spam filter for a messaging feature, with tight latency budgets and a large sparse bag-of-words feature space where heavier models were too slow to train and serve.

**Task** I had to ship an accurate baseline classifier quickly that could handle tens of thousands of word features.

**Action** I reached for Naive Bayes. It applies Bayes' theorem to compute the probability of each class given the words, and the 'naive' assumption is that every feature is conditionally independent given the class. That's obviously false for language, words co-occur, but the simplification makes the math trivial, so you just multiply per-word probabilities and it trains in a single pass. I used scikit-learn's MultinomialNB with Laplace smoothing to handle unseen words.

**Result** It trained in under a second on 50k messages and hit 94% accuracy, a strong baseline we shipped immediately. The insight I took away: even though the independence assumption is wrong, Naive Bayes is remarkably robust for text and a great fast-to-train benchmark before reaching for anything heavier.
