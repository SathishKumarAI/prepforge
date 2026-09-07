---
qid: ing_abad56f655__faang__local
question: 'Explain: Creating a headless Service for Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 442
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:17-05:00'
sources: []
---

**Clarify**  
You’re asking how to expose Cassandra from Kubernetes without a load‑balancer or external IP—i.e., a *headless* service that lets each pod discover the others via DNS. I’ll assume:  
• Cassandra runs as a StatefulSet (one pod per node).  
• We need intra‑cluster communication and client access, but no external LB.  

**Approach**  
1. Create a headless Service (`spec.clusterIP: None`).  
2. Point it at the Cassandra StatefulSet pods via `selector`.  
3. Use DNS SRV or direct pod names for discovery.  
4. Optionally add an additional service with a LoadBalancer for client access.

**Depth**  
```yaml
apiVersion: v1
kind: Service
metadata:
  name: cassandra-headless
spec:
  clusterIP: None          # headless
  selector:
    app: cassandra
  ports:
  - port: 9042             # CQL native transport
    targetPort: 9042
```
With `clusterIP: None`, Kubernetes creates DNS entries like  
`cassandra-headless.default.svc.cluster.local` → SRV records pointing to each pod’s IP. Cassandra nodes can resolve each other via these names, enabling proper gossip and seed discovery. Complexity is O(1) for lookups; the Service itself is lightweight.

**Edge Cases**  
* Pods restart → DNS TTL may delay resolution.  
* Mis‑configured `selector` leads to no endpoints.  
* StatefulSet pod names change if you delete pods; ensure persistence volume claims keep data.

**Optimize & Communicate**  
- Add a `loadBalancerIP` service for external clients to avoid exposing all node ports.  
- Use readiness probes so the Service only advertises healthy pods.  
Explain to interviewers: “We separate cluster‑internal traffic from client traffic, use headless DNS for discovery, and keep the design simple while ensuring high availability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
