---
qid: q097
question: "Conceptually, how would you compute monthly user retention with SQL?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** A product lead at our mobile app company kept asking "are the users we acquire actually coming back?" but all we reported was total monthly active users, which couldn't answer it because growth masked churn.

**Task** I needed to compute month-over-month retention in SQL so we could see whether a given month's new users returned in later months.

**Action** Conceptually I broke it into two pieces. First I built a cohort table: for each user, their first-activity month, which anchors them to a cohort. Then I took all their subsequent activity months. I self-joined activity events to that cohort, computing the month offset as the difference between the activity month and the signup month. Retention for cohort C at month N is the count of distinct users active at offset N divided by the cohort's original size. In practice that was a first_month CTE joined to monthly activity, then a GROUP BY cohort and offset with COUNT(DISTINCT user_id).

**Result** The resulting retention curve showed month-1 retention sat at only 22%, which reframed the roadmap toward re-engagement. My takeaway: retention is fundamentally a cohort-plus-offset calculation, anchoring each user to their start month and measuring who returns relative to that.
