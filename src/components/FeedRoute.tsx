// Import necessary libraries and components
import React from 'react';
import DailyFeedPlan from '../DailyFeedPlan';
import RecommendationSummary from '../RecommendationSummary';
import CostComparison from '../CostComparison';

// Define the FeedRoute component
const FeedRoute: React.FC = () => {
  return (
    <div className='feed-route'>
      <h1>Feed Route</h1>
      <DailyFeedPlan />
      <RecommendationSummary />
      <CostComparison />
    </div>
  );
};

export default FeedRoute;
