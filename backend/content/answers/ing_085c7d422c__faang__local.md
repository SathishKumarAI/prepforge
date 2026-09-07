---
qid: ing_085c7d422c__faang__local
question: 'Explain: How It Works : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 595
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:03:55-05:00'
sources: []
---

## Clarify  
The interviewer asks you to explain how load‑balancing algorithms work, provide a code snippet and visual illustration.  
Assumptions: we’re balancing HTTP requests across **N stateless web servers**; latency is the primary metric; we’ll use a simple language (Python) and illustrate with a diagram.

## Approach  
1. Outline the key algorithms: Round‑Robin, Least Connections, Weighted Round‑Robin.  
2. Show a concise Python implementation for each.  
3. Sketch a 4‑server example to visualize distribution.  
4. Discuss time/space complexity and trade‑offs.

## Depth  

| Algorithm | Code (Python) | Complexity |
|-----------|---------------|------------|
| **Round‑Robin** | ```python\nservers=['A','B','C']\nidx=0\nfor req in requests:\n    send(req, servers[idx])\n    idx=(idx+1)%len(servers)\n``` | O(1) per request |
| **Least Connections** | ```python\nactive={s:0 for s in servers}\nfor req in requests:\n    target=min(active, key=active.get)\n    send(req,target); active[target]+=1\n    # on completion: active[target]-=1\n``` | O(N) per request (N small) |
| **Weighted RR** | ```python\nweights={'A':3,'B':2,'C':1}\nqueue=[]\nfor s,w in weights.items(): queue+=[s]*w\nidx=0\nfor req in requests:\n    send(req,queue[idx])\n    idx=(idx+1)%len(queue)\n``` | O(1) per request |

### Visual (4‑server RR)

```
Req 1 → S1   Req 5 → S2
Req 2 → S2   Req 6 → S3
Req 3 → S3   Req 7 → S4
Req 4 → S4   Req 8 → S1
```

## Edge Cases  
- **Server failure**: RR will keep cycling; need health checks to skip dead nodes.  
- **Highly skewed traffic**: Least Connections mitigates overload but adds state.  
- **Weighted load**: Weights must reflect capacity; dynamic re‑weighting is costly.

## Optimize & Communicate  
Explain that in production we’d use a dedicated LB (NGINX, HAProxy) with health checks and sticky sessions when needed. Highlight trade‑offs: RR is simplest but ignores server load; Least Connections is more adaptive but needs per‑request state; Weighted RR balances capacity but requires weight tuning. Conclude by summarizing that the choice depends on traffic patterns and SLA requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
