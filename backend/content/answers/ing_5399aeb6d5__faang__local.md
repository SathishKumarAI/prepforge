---
qid: ing_5399aeb6d5__faang__local
question: 'Explain: Functional Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 646
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:58:34-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain the *functional requirements* of a conversational agent (chatbot).  
Key assumptions:  
- The agent is text‑based, possibly voice‑enabled.  
- It must handle user intents, provide useful responses, and maintain context.  
- Non‑functional constraints like latency (<200 ms) and privacy are out of scope.

**2️⃣ Approach**  
Break the requirement space into core capabilities: intent recognition, dialogue management, response generation, knowledge access, error handling, and user experience.

**3️⃣ Depth**  

| Capability | What it means | Typical tech |
|------------|---------------|--------------|
| **Intent & Entity Extraction** | Identify what the user wants (e.g., “book flight”) and key slots (“Paris”, “tomorrow”). | NLP pipelines, BERT‑based classifiers. |
| **Stateful Dialogue Management** | Keep track of context across turns to resolve pronouns or incomplete queries. | Finite state machines, RNNs, Transformer‑based policy networks. |
| **Response Generation** | Produce coherent, on‑topic replies that may be templated or generative. | Retrieval from knowledge base + templates; seq2seq or GPT‑style models. |
| **Knowledge Access** | Query external APIs or databases for up‑to‑date info (weather, stock). | REST/GraphQL connectors, caching layers. |
| **Error & Fall‑back Handling** | Detect misunderstanding and ask clarifying questions or hand off to human. | Confidence thresholds, fallback intents. |
| **User Experience Metrics** | Promptness, politeness, tone consistency. | A/B testing, NLU confidence scores. |

Complexity:  
- Intent classification is *O(n)* over utterance length; dialogue policy inference is *O(k·m)* where *k* = number of states, *m* = actions.  
- Latency targets push us to pre‑load embeddings and use lightweight models for production.

**4️⃣ Edge Cases**  

| Scenario | What can break it? |
|----------|-------------------|
| Ambiguous user input (“I need help”) | No clear intent → fallback fails. |
| Rapid turn‑by‑turn switching | State machine may lose context. |
| Out‑of‑scope queries | Knowledge base miss → hallucination risk. |

Tests: unit tests for intent mapping, integration tests for API calls, load tests to hit latency targets.

**5️⃣ Optimize & Communicate**  

- **Modularize** each capability so we can swap in better models without breaking the whole stack.  
- Use **confidence thresholds** to trigger fallback early, improving UX.  
- For scaling, cache frequent queries and batch inference on GPUs.  
- When explaining, narrate from user perspective: “When you ask X, the agent first figures out Y, remembers it, then fetches Z, and finally says A.”  

This structured view shows clear reasoning, technical depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
