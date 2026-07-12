---
qid: q014
question: "What is Retrieval-Augmented Generation (RAG)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** Our internal support chatbot at a SaaS company kept confidently inventing product features that didn't exist, because the base LLM had no knowledge of our private docs. Support tickets about the bot's own errors were piling up.

**Task** I was tasked with grounding the bot in our actual documentation without retraining a model.

**Action** I implemented Retrieval-Augmented Generation. I chunked our 4,000 help-center articles, embedded each chunk with a sentence-transformer model, and stored the vectors in a Pinecone index. At query time I embed the user's question, retrieve the top-k most similar chunks by cosine similarity, and inject them into the prompt as context so the LLM answers from real, current documents rather than its parametric memory. I tuned the chunk size and k, and added a citation of which article each answer came from.

**Result** Hallucinated answers dropped from around 30% to under 5%, and because I could update the index instantly, new features were answerable the day they shipped. The lesson: RAG separates knowledge from the model, so you update data, not weights.
