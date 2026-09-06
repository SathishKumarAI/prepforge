---
qid: ing_cb52c9e823__think__local
question: 'Explain: 2- Score — The Illustrated GPT-2 (Visualizing Transformer Language
  Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a
  time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 219
output_tokens: 470
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:21:09-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
- The user wants an *explanation* of “2‑Score – The Illustrated GPT‑2” by Jay Alammar, not a summary of the entire article.  
- Assume they’re familiar with Transformers but want to understand the specific “score” concept Alammar visualises (the probability distribution over next tokens).  
- Clarify that we’ll focus on the diagram, the math behind the softmax, and how it’s illustrated.

**2. Adopt a mental model**  
Use the *information‑flow* framework: start from the encoder‑decoder pipeline → token embedding → self‑attention → logits → softmax → probability distribution (“score”). Map each step to Alammar’s visual elements (color‑coded heads, arrows).

**3. Step‑by‑step reasoning**  
- Explain what a “score” means in language modelling: the unnormalised log‑probability (logit) for each token before softmax.  
- Show how the transformer outputs these logits via a linear layer on top of hidden states.  
- Describe the softmax operation that turns logits into a probability distribution over the vocabulary.  
- Highlight Alammar’s use of color gradients to represent high vs low scores, and how the diagram groups attention heads to illustrate different scoring patterns.

**4. Avoid common traps**  
- Don’t confuse “score” with loss or perplexity; it’s just the per‑token raw output before normalisation.  
- Resist over‑technical jargon—explain logits as “raw scores” that become probabilities after softmax.  
- Keep the explanation concise; the user asked for an explanation, not a full tutorial.

**5. Sanity‑check & communicate**  
- Re‑read the explanation to ensure it follows the flow: input → logits (“score”) → softmax → distribution.  
- Verify that each visual cue (color, arrows) is mapped back to the corresponding mathematical operation.  
- Conclude with a quick recap: “In Alammar’s illustration, the ‘Score’ diagram shows how GPT‑2 assigns raw probabilities to every word, then normalises them so the model can sample or pick the next token.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
