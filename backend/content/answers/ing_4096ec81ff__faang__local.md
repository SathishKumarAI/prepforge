---
qid: ing_4096ec81ff__faang__local
question: 'Explain: Modifying the Cassandra StatefulSet — Example: Deploying Cassandra
  with a StatefulSet | Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 665
total_tokens: 908
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:16-05:00'
sources: []
---

**Clarify**  
You want to run Apache Cassandra on Kubernetes using a *StatefulSet* so that each pod gets its own stable network identity and persistent storage. Assume we’re on an EKS/AKS cluster with CSI‑driven PVCs, the cluster is already up, and you have IAM/RBAC set for kube‑proxy.  

**Approach**  
1. **Define a headless Service** (`cassandra-headless`) to give each pod a DNS record.  
2. **Create a `StatefulSet`** that:  
   * Uses the official Cassandra image (e.g., `cassandra:4.0`).  
   * Sets `replicas`, `serviceName`, and `podManagementPolicy=Parallel` if you want faster rollouts.  
3. **Persist data** – mount a PVC per pod (`volumeClaimTemplates`) with storage class that supports snapshots.  
4. **Configure Cassandra** – set JVM options, seed nodes, and cluster name via env vars or a ConfigMap.  
5. **Expose the service** – `NodePort`/`LoadBalancer` for external clients or keep internal only.  

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
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: cassandra
spec:
  serviceName: cassandra-headless
  replicas: 3
  selector:
    matchLabels:
      app: cassandra
  template:
    metadata:
      labels:
        app: cassandra
    spec:
      containers:
      - name: cassandra
        image: cassandra:4.0
        env:
          - name: CASSANDRA_CLUSTER_NAME
            value: "k8s-cassandra"
          - name: CASSANDRA_SEEDS
            value: "$(POD_IP)"
        ports:
          - containerPort: 9042
        volumeMounts:
          - mountPath: /var/lib/cassandra
            name: data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ReadWriteOnce]
      resources:
        requests:
          storage: 10Gi
```
**Edge Cases**  
*Pod IP changes*: ensure `CASSANDRA_SEEDS` uses the pod’s DNS (`cassandra-0.cassandra-headless`).  
*Storage failure*: PVC reclaimPolicy should be `Delete` or `Retain` per policy.  
*Rolling updates*: set `updateStrategy: RollingUpdate`.  

**Optimize & Communicate**  
Use `ReadWriteOncePod` for tighter isolation, enable compression in Cassandra, and monitor with Prometheus. I’d explain each step to the interviewer, confirm assumptions, show trade‑offs (e.g., Parallel vs Ordered), and finish by highlighting how this design satisfies high availability and data durability—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
