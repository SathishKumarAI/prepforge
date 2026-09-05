---
qid: ing_bf04b57cbd__eli5__local
question: You're training a large model across hundreds of accelerators. Compare data,
  tensor, and pipeline parallelism - when do you combine them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 328
total_tokens: 502
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:39:48-05:00'
sources: []
---

Imagine you’re baking a huge cake that needs to be shared among many friends in a big kitchen.

**Data parallelism** is like giving each friend their own identical set of ingredients and a small oven. Every friend bakes the same slice of cake at the same time, then everyone shares the finished slices. You combine these slices later – this is **parameter synchronization** after every bake cycle.

**Tensor (model) parallelism** is like cutting one giant batter into thick slabs and giving each friend a different section to work on in the same oven. The friends only touch their own slab but they must pass frosting or crumbs to neighbors when finishing, because the cake’s layers need to fit together seamlessly.

**Pipeline parallelism** is similar to slicing the cake into thin pancakes that travel through a conveyor belt. One friend flips a pancake and hands it off to the next; each friend works on a different stage (mixing, baking, cooling) in sequence.

When training thousands of GPUs you often **combine all three**:  
- Data parallelism splits many copies of the model across groups of GPUs so each group processes a different mini‑batch.  
- Inside each group, tensor parallelism splits the large model’s tensors among the GPUs so they can fit on memory and work faster.  
- Pipeline parallelism lets those groups process different stages of a very deep network in lockstep, keeping all GPUs busy.

By layering these techniques you keep every accelerator occupied while handling models that would otherwise be too big for any single machine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
