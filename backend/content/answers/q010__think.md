---
qid: q010
question: "What is Natural Language Processing (NLP) and what are some common tasks?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note the two-part ask — a definition *and* a task list — and plan to deliver both. Assume they want breadth of tasks over depth on any one.
2. **Mental model.** Frame NLP as the bridge between **human language (text/speech)** and **machine understanding/generation**. Then sort tasks into a spectrum from low-level structure to high-level meaning.
3. **Reason step by step.** Define NLP as the AI branch for understanding, interpreting, and generating language. Walk the spectrum: **tokenization** (split into words/subwords) → **POS tagging / parsing** (structure) → **NER** (extract names, places, dates) → **sentiment analysis** (classify emotion) → **machine translation**, **summarization**, **question answering** (higher-level). Then place it historically: bag-of-words/TF-IDF and RNNs gave way to **transformer** models (BERT, GPT) that learn contextual representations from huge corpora.
4. **Traps to avoid.** Don't mix in unrelated fields (image compression, DB indexing, GPU standards are distractors). Don't claim classical preprocessing (lowercasing, stopwords, stemming) is obsolete — it still matters for classical pipelines.
5. **Sanity-check + delivery.** Confirm each task you named is genuinely language-centric. Deliver the definition first, then rattle off 4-6 concrete tasks, and note transformers now dominate the field.
