import * as React from 'react';

import ActionButton from '../../ActionButton/ActionButton';
import { Course } from '../../../domain/models';
import { DOWNLOADS_URL } from '../../../utils/downloads';

import './CoursePurchaseArea.css';

interface CoursePurchaseAreaProps {
  course: Course;
}

// Courses are no longer sold. Enrolled students download them from the
// downloads site with the access code they were emailed.
export const CoursePurchaseArea = (_props: CoursePurchaseAreaProps) => (
  <div className="course-purchase-area-container">
    <h2>Already enrolled?</h2>
    <div className="course-purchase-area-options course-download-note">
      <p>
        Download the full course, with every video and the exercise files, using
        the access code from your email.
      </p>
      <p className="course-download-closed">New enrollments are closed.</p>
    </div>

    <ActionButton
      text="Download your course"
      url={DOWNLOADS_URL}
      type="primary"
      newWindow={true}
    />
  </div>
);
