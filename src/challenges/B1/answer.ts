/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 *
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function ({
  events,
}: {
  events: EventDatetime[];
}): EventDatetime[] {
  return events.sort((a, b) => {
    const aStart = Number(new Date(a.startDatetime));
    const bStart = Number(new Date(b.startDatetime));
    const aEnd = Number(new Date(a.endDatetime));
    const bEnd = Number(new Date(b.endDatetime));
    const aDuration = aEnd - aStart;
    const bDuration = bEnd - bStart;

    return aStart - bStart || aDuration - bDuration;

  });
}

// used interfaces, do not touch
export interface EventDatetime {
  startDatetime: string;
  endDatetime: string;
  event: string;
}
