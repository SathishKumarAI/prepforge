---
qid: ing_e0303d16ec__think__local
question: 'Explain: Step 5. Add memory — How Do AI Agents Work - by Neo Kim and Fran
  Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 496
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:46:12-05:00'
sources: []
---

**Thinking Process for Explaining “Step 5. Add Memory” in the article *How Do AI Agents Work* (Neo Kim & Fran Soto)**  

1. **Clarify the target and assumptions**  
   - Audience: novices who understand basic agent‑perception–action loop but not internal state concepts.  
   - Assume they know what a “memory” is in everyday terms but not how it’s implemented in AI.  
2. **Choose a mental model / framework**  
   - Use the *state machine* analogy: an agent’s memory is its hidden state that evolves over time.  
   - Map this to three concrete forms used in practice: (a) short‑term (buffers, queues), (b) long‑term (embedding tables, external databases), and (c) hybrid (neural recurrent units).  
3. **Step‑by‑step reasoning**  
   1. Start with the perception step: each observation is a new input vector.  
   2. Show how memory *stores* past inputs: e.g., a sliding window or an LSTM cell.  
   3. Explain the update rule: current state = f(previous state, new observation).  
   4. Illustrate retrieval: when deciding on an action, the agent queries its stored state (e.g., attention over past tokens).  
   5. Highlight how this enables *temporal coherence*—the agent can remember goals or past failures.  
4. **Common traps to avoid**  
   - Don’t conflate memory with external knowledge bases; keep it focused on internal state.  
   - Avoid overly technical jargon (e.g., “GRU gates”) unless the audience is advanced.  
   - Beware of implying that all agents have perfect memory—real systems use limited capacity or decay mechanisms.  
5. **Sanity‑check & verbalizing**  
   - Ask: *Does this explanation let a reader picture an agent storing and recalling information like a human?*  
   - If yes, proceed; if not, add a relatable analogy (e.g., “like remembering the last few words in a conversation”).  
   - End with a quick recap: perception → memory update → action selection. This loop is what gives agents persistence over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
