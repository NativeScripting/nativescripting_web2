import * as React from 'react';
import { Lesson } from '../../../domain/models';
import { PublishingScheduleItem } from '../../../domain/models/publishing-schedule-item.model';

import './CurriculumLesson.css';

interface CurriculumLessonProps {
  lesson: Lesson;
  isPublishedChapter: boolean;
  chapterPublishScheduleItem: PublishingScheduleItem;
  courseSlug: string;
}

export const CurriculumLesson = (props: CurriculumLessonProps) => {
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  
  const lessonDate = props.chapterPublishScheduleItem
    ? 'Coming ' +
      props.chapterPublishScheduleItem.date.toLocaleDateString(
        'en-US',
        dateOptions
      )
    : 'Planned Lesson';

  // Lessons used to link into Teachable's player. The course is now a download,
  // so published lessons are listed without a link.
  const lessonActionHtml = props.isPublishedChapter ? (
    <div className="lesson-action-wrapper" />
  ) : (
    <div className="lesson-action-wrapper">
      <span>{lessonDate}</span>
    </div>
  );

  return (
    <div className="lesson-container">
      <div className="lesson-number-wrapper">
        <span>{props.lesson.lessonNumber}</span>
      </div>
      <div className="lesson-name-wrapper">
        <span>{props.lesson.name}</span>
      </div>
      {lessonActionHtml}
    </div>
  );
};
