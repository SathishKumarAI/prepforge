import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Page } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Button } from "../components/ui/button";
import { Segmented, SegmentedPanel } from "../components/ui/segmented";
import { QuestionsView } from "../components/library/QuestionsView";
import { SavedView } from "../components/library/SavedView";
import { CollectionsView } from "../components/library/CollectionsView";
import { FeedView } from "../components/library/FeedView";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import { fetchSources } from "../lib/api";
import { isDue } from "../lib/srs";

/**
 * Everything you can study from, at four granularities.
 *
 * Slot table
 *   route    /library?view=questions|saved|collections|feed
 *   job      find the material you want
 *   orient   counts that CHANGE with the view — see below
 *   act      the view switch, plus one link out to the Reader
 *   review   the list itself
 *   accent   the active view segment only
 *
 * Deviation from the brief, stated loudly: the Reader is NOT a fifth view. The
 * other four are collections of material at different granularities — a
 * question, a question you saved, a document, a feed item — and they are the
 * same kind of thing. The Reader is a tool that opens one file. Putting it in
 * the same tab row would be exactly the IA failure this restructure exists to
 * fix: a row mixing surfaces with the items that live inside them. It keeps its
 * route, and gets one contextual link from here, which is the zone where
 * deciding to read something makes sense.
 */

type View = "questions" | "saved" | "collections" | "feed";

const VIEW_ORDER: View[] = ["questions", "saved", "collections", "feed"];

const VIEW_LABEL: Record<View, string> = {
  questions: "Questions",
  saved: "Saved",
  collections: "Collections",
  feed: "Feed",
};

function toView(value: unknown): View {
  return typeof value === "string" && VIEW_ORDER.includes(value as View)
    ? (value as View)
    : "questions";
}

export function Library() {
  const [params, setParams] = useSearchParams();
  const view = toView(params.get("view"));

  const { questions } = useQuestions();
  const { progress } = useProgress();
  const [library, setLibrary] = useState<{ collections: number; docs: number; cards: number } | null>(
    null,
  );
  const [feed, setFeed] = useState<{ total: number; videos: number } | null>(null);
  // Stable identity: FeedView reports through an effect, so a new function each
  // render would make that effect fire on every parent render.
  const onFeedCounts = useCallback((c: { total: number; videos: number }) => setFeed(c), []);

  // Only the collections view needs these counts, so only it pays for the call.
  useEffect(() => {
    if (view !== "collections" || library) return;
    let live = true;
    fetchSources()
      .then((d) => live && setLibrary({ collections: d.collections.length, docs: d.docs, cards: d.cards }))
      .catch(() => {
        /* the view renders its own error surface */
      });
    return () => {
      live = false;
    };
  }, [view, library]);

  const counts = useMemo(() => {
    const due = questions.filter((q) => {
      const c = progress.srs[q.id];
      return c && c.seen && isDue(c);
    }).length;
    return {
      questions: questions.length,
      due,
      saved: progress.bookmarks.length,
      noted: Object.keys(progress.notes).length,
    };
  }, [questions, progress]);

  /**
   * The orient bar is part of what the view switch filters. A segmented control
   * that changes the list but leaves the same three numbers above it is the
   * "mode that only moves a highlight" bug wearing a different hat.
   */
  const facts: Record<View, ReactNode> = {
    questions: (
      <Orient>
        <Fact label="questions" value={counts.questions || null} emphasis={counts.questions > 0} />
        <Fact label="due for review" value={counts.due || null} />
      </Orient>
    ),
    saved: (
      <Orient>
        <Fact label="bookmarked" value={counts.saved || null} emphasis={counts.saved > 0} />
        <Fact label="with a note" value={counts.noted || null} />
      </Orient>
    ),
    collections: (
      <Orient>
        <Fact
          label="collections"
          value={library?.collections ?? null}
          emphasis={Boolean(library?.collections)}
        />
        <Fact label="documents" value={library?.docs ?? null} />
        <Fact label="cards made" value={library?.cards ?? null} />
      </Orient>
    ),
    feed: (
      <Orient>
        <Fact label="saved items" value={feed?.total ?? null} emphasis={Boolean(feed?.total)} />
        <Fact label="videos" value={feed?.videos ?? null} />
        <Fact
          label="articles"
          value={feed ? feed.total - feed.videos || null : null}
        />
      </Orient>
    ),
  };

  return (
    <Page
      title="Library"
      orient={facts[view]}
      actions={
        <Button asChild variant="ghost" size="sm">
          <Link to="/reader">
            <BookOpen aria-hidden="true" />
            Open the reader
          </Link>
        </Button>
      }
    >
      <Segmented
        label="Library view"
        value={view}
        options={VIEW_ORDER.map((v) => ({ value: v, label: VIEW_LABEL[v] }))}
        onChange={(v) => setParams({ view: v }, { replace: true })}
        idPrefix="library-view"
        panelId="library-view-panel"
        className="mb-6"
      />

      <SegmentedPanel id="library-view-panel" labelledBy={`library-view-tab-${view}`}>
        {view === "questions" && <QuestionsView />}
        {view === "saved" && <SavedView />}
        {view === "collections" && <CollectionsView />}
        {view === "feed" && <FeedView onCounts={onFeedCounts} />}
      </SegmentedPanel>
    </Page>
  );
}
