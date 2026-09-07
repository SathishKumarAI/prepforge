---
qid: ing_06563632d8__aws__local
question: 'Explain: Summary: — Load Balancing Algorithms Explained with Code (and
  Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:05-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of our AI‑model inference service that served millions of predictions per day. The existing round‑robin load balancer caused hot spots and 3 % SLA violations. My goal was to implement a smarter algorithm—Weighted Least Connections (WLC)—and demonstrate its impact.

**Action**  
1. **Dive Deep**: Collected metrics on request rates, latency, and backend health from CloudWatch.  
2. **Design**: Built a custom `WlcBalancer` in Go that queries each instance’s current connection count via `/metrics`.  
   ```go
   type Node struct{ Addr string; Weight int }
   func (b *WlcBalancer) Pick(nodes []Node) Node {
       min := math.MaxInt64
       var chosen Node
       for _, n := range nodes {
           conn := getConnCount(n.Addr)
           score := float64(conn) / float64(n.Weight)
           if score < float64(min) { min=int(score); chosen=n }
       }
       return chosen
   }
   ```  
3. **Visuals**: Generated a Grafana dashboard showing real‑time distribution of connections per instance before/after WLC.  
4. **Deploy & Test**: Deployed via ECS Service Auto Scaling, monitored with CloudWatch Alarms.

**Result**  
- 47 % reduction in peak latency (from 350 ms to 190 ms).  
- SLA violations dropped from 3 % to <0.2 %.  
- Cost savings of ~12 % by eliminating over‑provisioned nodes.  

**Learnings**  
Ownership: I drove the entire cycle—requirements → design → code → ops.  
Bias for Action: Implemented within two sprints, avoiding prolonged experiments.  
Bar‑raiser check: Demonstrated depth (metrics, trade‑offs) and quantified impact, ready to iterate on adaptive weighting if traffic patterns shift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
