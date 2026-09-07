---
qid: ing_d868320f85__faang__local
question: 'What Is Context Pollution? — The Day 30 Problem: Why Your AI Agent Gets
  Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 557
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:02:51-05:00'
sources: []
---

**Clarify**  
The question asks for a definition of *context pollution* and why an AI agent’s performance can degrade over time—i.e., the “Day 30 Problem” from Cipher. I’ll assume we’re dealing with language‑model agents that accumulate conversational context (memory) across interactions.

**Approach**  
1. Define context pollution in plain terms.  
2. Explain how it manifests in incremental memory updates.  
3. Show why it hurts performance after many turns.  
4. Mention mitigation strategies and trade‑offs.

**Depth**  
*Context pollution* is the gradual contamination of an agent’s internal state by irrelevant, noisy, or contradictory information that has been appended to its context window. In practice, every new user utterance or system response is concatenated into a single prompt fed back to the model. After many turns, the prompt contains:  

- **Redundant facts** (repeated explanations).  
- **Out‑of‑date data** (obsolete references).  
- **Conflicting claims** (user correcting earlier statements).  

Large language models interpret longer prompts as more important context; thus, polluted tokens receive disproportionate attention. This leads to:

1. **Hallucinations** – the model “believes” false facts it just heard.  
2. **Context drift** – the agent forgets earlier correct information in favor of newer noise.  
3. **Latency & token budget waste** – longer prompts consume more compute, reducing throughput.

The *Day 30 Problem* illustrates this: an agent trained on a fixed dataset begins to generate poorer responses as its own memory accumulates over days of interaction.

**Edge cases**  
- Short‑term dialogs (≤5 turns) rarely show pollution.  
- High‑precision tasks (e.g., medical diagnosis) are more sensitive.  
- Systems that purge context every N turns may still leak stale info if the purge window is too large.

**Optimize & communicate**  
Mitigations:  

| Technique | Benefit | Trade‑off |
|-----------|---------|-----------|
| **Sliding window** (keep last K tokens) | Keeps prompt concise | May drop useful long‑term facts |
| **Semantic filtering** (remove duplicates, contradictions) | Reduces noise | Extra preprocessing cost |
| **Memory summarization** (compress past turns) | Preserves gist | Possible loss of nuance |

When explaining to stakeholders, I’d emphasize that context pollution is a form of *model drift* driven by prompt bloat, and that balancing memory fidelity against token budget is key to sustaining agent quality over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
