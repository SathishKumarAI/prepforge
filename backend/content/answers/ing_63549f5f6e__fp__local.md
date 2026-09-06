---
qid: ing_63549f5f6e__fp__local
question: 'Q13: How do you implement tool use / function calling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 645
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:13-05:00'
sources: []
---

### From Problem to Solution  

An LLM is a probabilistic text generator:  
\(P(y|x)=\prod_i P(y_i|y_{<i},x)\).  
When the user’s intent \(x\) requires *external knowledge* or *action*, the model can no longer satisfy it by emitting tokens alone. We must **decompose** the task into two sub‑problems:

1. **Decision** – choose a tool \(t_k\) that can realize the desired effect.  
2. **Execution** – produce arguments \(\theta_k\) and invoke the tool.

Formally, we learn a policy \(\pi(k,\theta|x)\) that maximizes expected reward
\(R(x,t_k(\theta))\). This is exactly a *sequential decision problem* in RL: the model’s output token stream is an action sequence, and the environment (the tool) returns a new observation \(y'\).

### Why the “function‑call” format works  

- **Deterministic interface** – tools expose a fixed JSON schema \(\{name,\;arguments\}\).  
  The LLM can learn to output a *valid* token sequence that parses into this schema.  
- **Error isolation** – if parsing fails, the model re‑generates; the reward signal is crisp (success/failure).  
- **Training data alignment** – we can fine‑tune on logs where humans wrote function calls, turning the problem into supervised learning of \(\pi\).

### Implementation sketch  

```python
def generate_with_tools(prompt):
    # 1. Tokenise prompt + special <TOOL> token
    tokens = tokenizer.encode(prompt + "<TOOL>")
    while not finished:
        probs = model(tokens)          # next‑token distribution
        token = sample(probs)
        if token == "<CALL>":
            call_json = parse_next_tokens()   # expects valid JSON
            result = tool_registry[call_json['name']](**call_json['arguments'])
            tokens += tokenizer.encode(str(result))
        else:
            tokens.append(token)
    return tokenizer.decode(tokens)
```

- **Parsing** uses a strict grammar; failures trigger re‑generation.  
- **Tool registry** can be any function or API wrapper.

### Non‑obvious insight  

The *critical* part is not the tool itself but the **latent representation of intent** that the LLM learns to map onto the discrete set of functions. Because the model treats a function call as just another token sequence, it naturally **embeds** the semantics of “calling X with Y” into its hidden states. This embedding can be exploited: by prompting the model to *explain* its choice (e.g., `Explain why I chose tool A`), we reveal an interpretable decision process that can be audited or fine‑tuned—something most architectures hide behind opaque logits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
