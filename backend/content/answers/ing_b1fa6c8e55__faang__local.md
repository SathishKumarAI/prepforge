---
qid: ing_b1fa6c8e55__faang__local
question: 'Explain: Example: Deploying Cassandra with a StatefulSet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 619
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:45-05:00'
sources: []
---

**Clarify**  
You’re asking how to run an Apache Cassandra cluster on Kubernetes using a *StatefulSet*. I’ll assume you need persistent storage per node, head‑to‑head networking, and automated scaling/rolling updates.

**Approach**  
1. Create a `Headless Service` for DNS (e.g., `cassandra-headless`).  
2. Define a `PersistentVolumeClaimTemplate` in the StatefulSet to provision a unique PVC per pod.  
3. Specify Cassandra’s container image, env vars (`CASSANDRA_CLUSTER_NAME`, `SEEDS`, etc.), and ports.  
4. Add init containers or scripts that run `cassandra‑seed` logic on first start.  
5. Expose the StatefulSet via the headless service so pods can resolve each other as `cassandra-0.cassandra-headless`, `cassandra-1…`.  
6. Use rolling update strategy (`RollingUpdate`) with a `maxUnavailable: 1` to keep quorum.

**Depth**  
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: cassandra
spec:
  serviceName: "cassandra-headless"
  replicas: 3
  selector: { matchLabels: { app: cassandra } }
  template:
    metadata: { labels: { app: cassandra } }
    spec:
      containers:
        - name: cassandra
          image: cassandra:4.0
          env:
            - name: CASSANDRA_CLUSTER_NAME
              value: prod-cluster
            - name: CASSANDRA_SEEDS
              value: cassandra-0.cassandra-headless
          ports: [{ containerPort: 9042 }]
          volumeMounts:
            - mountPath: /var/lib/cassandra
              name: data
  volumeClaimTemplates:
    - metadata:
        name: data
      spec:
        accessModes: [ReadWriteOnce]
        resources: { requests: { storage: 10Gi } }
```
This guarantees each node has its own disk, stable identity, and can join the ring on startup.

**Edge Cases**  
- **PVC provisioning failures** → pod stays pending.  
- **Seed mis‑config** → cluster won’t form; verify `CASSANDRA_SEEDS`.  
- **Rolling update > 1 unavailable** may drop quorum; keep `maxUnavailable: 1`.

**Optimize & Communicate**  
Use a StorageClass with SSDs for low latency, and enable *ReadWriteMany* if using a shared‑file system (e.g., Ceph). Explain that the headless service provides DNS stability, while StatefulSet guarantees ordinal naming. Conclude by highlighting observability: expose JMX metrics via sidecar Prometheus exporters to monitor node health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
