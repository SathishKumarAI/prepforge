---
qid: ing_d78014e0a9__faang__local
question: 'Explain: Note — Example: Deploying Cassandra with a StatefulSet | Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 761
total_tokens: 999
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:00:37-05:00'
sources: []
---

**Clarify**  
You’re asked how to run Apache Cassandra on Kubernetes using a *StatefulSet*. The goal is a highly‑available, fault‑tolerant cluster that preserves node identity and persistent storage across pod restarts. Confirm assumptions: you have a K8s cluster with persistent volume provisioner (e.g., EBS, GCE PD), network policies allow intra‑cluster communication, and you’re comfortable writing Helm charts or raw manifests.

**Approach**  
1. **Define the StatefulSet** – specify `replicas`, `serviceName` for head‑less DNS (`cassandra.default.svc.cluster.local`).  
2. **Persistent Volumes** – use a `VolumeClaimTemplate` to auto‑create PVCs per pod; ensure storage class supports *ReadWriteOnce* and dynamic provisioning.  
3. **Pod Spec** – mount the PVC, expose ports 7000/7001 (JMX), 9042 (CQL). Set environment vars (`CASSANDRA_CLUSTER_NAME`, `CASSANDRA_DC`, `CASSANDRA_RACK`).  
4. **Head‑less Service** – gives each pod a stable DNS record (`cassandra-<ordinal>.<svc>`).  
5. **Init Container** – run `cassandra` bootstrap script to add nodes to the ring without manual gossip.  
6. **Lifecycle Hooks** – graceful shutdown via `preStop` to allow Cassandra to drain connections.

**Depth**  
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: cassandra
spec:
  serviceName: "cassandra"
  replicas: 3
  selector: {matchLabels:{app:"cassandra"}}
  template:
    metadata: {labels:{app:"cassandra"}}
    spec:
      containers:
      - name: cassandra
        image: cassandra:4.0
        env:
          - name: CASSANDRA_CLUSTER_NAME; value: "K8sCluster"
          - name: CASSANDRA_DC; value: "dc1"
          - name: CASSANDRA_RACK; value: "rack1"
        ports: [{containerPort: 9042}]
        volumeMounts:
          - mountPath: /var/lib/cassandra
            name: cassandra-data
      initContainers:
      - name: bootstrap
        image: busybox
        command: ["sh","-c","echo 'bootstrap'"]
  volumeClaimTemplates:
  - metadata: {name: cassandra-data}
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: gp2
      resources: {requests:{storage:"10Gi"}}
```
**Edge Cases**  
- *Pod eviction*: ensure `terminationGracePeriodSeconds` > 60 s.  
- *Node failure*: StatefulSet guarantees ordinal stability; Cassandra will rebalance automatically.  
- *Storage limits*: PVC quota may prevent scaling beyond a threshold.

**Optimize & Communicate**  
Use Helm for templating and version control. Add liveness/readiness probes (`cqlsh`‑based checks) to surface cluster health early. Explain trade‑offs: StatefulSet gives identity but slows rolling upgrades; consider using `kubectl rollout restart` with staggered delays. Conclude by highlighting that this pattern yields a production‑grade Cassandra deployment, aligning with FAANG expectations for reliability and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
