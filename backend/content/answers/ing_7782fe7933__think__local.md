---
qid: ing_7782fe7933__think__local
question: 'Explain: Conflicting facts — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 505
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:53:53-05:00'
sources: []
---

### 1️⃣ Clarify the question & set assumptions  
- **What is “conflicting facts”**?  We’re dealing with two sources that can disagree (e.g., a knowledge base vs. real‑time sensor data).  
- **Agent memory**: long‑term storage of facts, rules, and past experiences.  
- **State**: the current configuration of variables that influence decisions at a given time.  
Assume the agent is reactive, has both a persistent memory module and an online state representation.

### 2️⃣ Adopt a mental model  
Think of the system as two layers:  
1. *Persistent Layer* (memory) – static facts, learned knowledge.  
2. *Dynamic Layer* (state) – context‑dependent values that can override memory when needed.  
Use the **Conflict Resolution Framework**: detect conflict → evaluate source trustworthiness → apply resolution strategy.

### 3️⃣ Step‑by‑step reasoning  
1. **Detect** a discrepancy between memory and state (e.g., “The door is closed” in memory vs. sensor says open).  
2. **Assess credibility**: check timestamps, source reliability scores, or confidence levels.  
3. **Apply resolution rule**:  
   - *Priority*: give state higher priority for immediate actions.  
   - *Temporal decay*: older memory facts may be less relevant.  
4. **Update**: if the conflict is resolved in favor of state, optionally flag the memory entry for revision (e.g., schedule a learning update).  
5. **Act** based on the reconciled fact.

### 4️⃣ Common traps to avoid  
- *Assuming static trust*: all sources aren’t equally reliable over time.  
- *Ignoring context*: a conflict might be intentional (e.g., memory of a planned change).  
- *Over‑overwriting memory*: permanent deletion can erase useful long‑term knowledge.

### 5️⃣ Sanity‑check & verbalize  
- **Check**: “Does the chosen fact make sense in current goals?”  
- **Explain**: “I chose state over memory because it has a higher confidence score and is time‑stamped to the present.”  
- **Document**: log the conflict, resolution decision, and any updates for future learning.

This structured approach helps keep the agent’s decisions coherent while allowing adaptability when new information arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
