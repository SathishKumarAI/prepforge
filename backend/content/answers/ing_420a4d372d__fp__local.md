---
qid: ing_420a4d372d__fp__local
question: 'Explain: Recall vs Latency Tradeoff — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 522
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:25:11-05:00'
sources: []
---

### Recall–Latency Trade‑off in Vector Databases

The core problem is *k‑Nearest‑Neighbour (k‑NN) search* on a set \(X=\{x_i\in\mathbb R^d\}\).  
For an exact query \(q\), we need to find all points with minimal distance \(\|q-x_i\|\).  
An **index** partitions the space into cells; at query time we inspect only a subset of cells, drastically reducing latency.  

The trade‑off emerges because any partition that is *coarse* (few, large cells) guarantees fast lookup but may miss points that lie just outside the inspected cells—recall falls.  
Conversely, a *fine* partition (many small cells or exhaustive traversal) catches almost all true neighbours—high recall—but incurs high latency.

Mathematically, let \(C(q)\) be the set of cells examined.  
Latency \(\approx |C(q)|\cdot T_{\text{cell}}\).  
Recall \(\ge 1-\Pr[\exists x^*_{k}\notin C(q)]\), where \(x^*_k\) is the true k‑th neighbour.  

**Deep insight:** The dimensionality \(d\) reshapes the trade‑off curve.  
In low dimensions, distances are highly discriminative; a moderate number of cells already guarantees high recall, so latency can stay low.  
As \(d\) grows, points become equidistant (“curse of dimensionality”), and even a fine partition yields little benefit: many points fall into the same cell.  
Thus, beyond a critical \(d\), adding more cells (increasing latency) yields diminishing returns in recall—an effect that often surprises practitioners who expect “more cells = better recall” regardless of dimension.

In practice, vector DBs expose parameters (e.g., *efSearch* in HNSW) that let users slide along this curve: tighten the search budget for low latency or relax it for higher recall, always mindful that dimensionality dictates how far you can go.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
