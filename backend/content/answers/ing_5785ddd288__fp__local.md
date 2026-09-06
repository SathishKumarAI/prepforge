---
qid: ing_5785ddd288__fp__local
question: 'Explain: Step 3 — Linux Boot Process Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 497
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:10:36-05:00'
sources: []
---

**Step 3 – Mounting the Root Filesystem**

When the kernel finishes decompressing and initializing its core subsystems (CPU mode switches, memory layout, device drivers), it must give itself a *stable* storage target for all subsequent operations.  
The kernel’s boot‑loader handoff hands over two pointers:  

1. **`initrd`/`initramfs`** – an in‑memory RAM disk that contains minimal utilities and drivers.  
2. **`root=`** – the block device (or UUID) that holds the real root filesystem.

The kernel first mounts the `initrd` as a temporary *pivot_root*. This gives it a writable, consistent namespace from which it can load additional drivers or resolve encrypted filesystems. Once all prerequisites are satisfied, the kernel performs **the pivot to the real root**:

```
mount –t <fstype> <dev> /mnt/root
pivot_root /mnt/root /
```

This operation is mathematically a *topological re‑wiring* of the filesystem tree: every path that previously pointed at `/` now points to the new device, while the old RAM disk becomes an orphaned mount that can be unmounted safely.

**Why it must work this way**

- **Atomicity**: The pivot guarantees that processes started after the switch never see a partially mounted root; they either operate on the real filesystem or fail immediately.
- **Dependency ordering**: Drivers needed to access the actual disk are loaded before the mount, preventing deadlock scenarios where a driver tries to read its own firmware from an unmounted partition.

**Non‑obvious insight**

The pivot trick also provides *in‑place rollback*. If mounting fails, the kernel can revert to the `initrd` and attempt alternative strategies (e.g., rescue mode) without rebooting. This built‑in “soft failover” is rarely highlighted but is a direct consequence of treating mounts as first‑class reversible graph edges rather than immutable state changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
