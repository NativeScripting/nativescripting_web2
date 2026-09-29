import * as React from 'react';
import { Bundle } from '../../../domain/models';
import ActionButton, { ActionBtnType } from '../../ActionButton/ActionButton';
import BundleCourseList from '../BundleCourse/BundleCourseList';
import { DOWNLOADS_URL } from '../../../utils/downloads';

import './BundleCard.css';

export interface BundleCardProps {
  bundle: Bundle;
}

function buttonType(level: number): ActionBtnType {
  switch (level) {
    case 1:
      return 'primary';
    case 2:
      return 'secondary';
    case 3:
      return 'tertiary';
    default:
      return null;
  }
}

// Bundles are no longer sold; the card lists what a bundle contains and sends
// enrolled students to the downloads site.
const BundleCard = (props: BundleCardProps) => {
  const bundle = props.bundle;
  const type = buttonType(bundle.bundleLevel);

  return (
    <div className={`bundle-container ${type}`}>
      <div className="bundle-header">
        <h3 className="bundle-header-title">{bundle.title}</h3>
        <p className="bundle-header-subtitle">{bundle.courses.length} courses</p>
      </div>

      <div className="bundle-courses">
        <BundleCourseList courses={bundle.courses} />
      </div>

      <div className="bundle-bottom bundle-download-note">
        <p>Already enrolled? Download your courses.</p>
      </div>

      <ActionButton
        text="Download bundle"
        url={DOWNLOADS_URL}
        type={type}
        newWindow={true}
      />
    </div>
  );
};

export default BundleCard;
