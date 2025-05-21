import Navbar from "../components/Navbar";
import Joyride from 'react-joyride';
import { useTour } from '../context/TourContext';

export default function Products() {
  const { runTour, stepIndex, setRunTour, setStepIndex } = useTour();

  return (
    <div>
      <Joyride
        steps={[
          {
            target: '.products-step',
            content: 'These are our products available for purchase!',
          }
        ]}
        run={runTour}
        stepIndex={stepIndex === 4 ? 0 : -1} // Only run this step if we're on step 4
        continuous
        showProgress
        showSkipButton
        scrollToFirstStep
        scrollToSteps
        callback={(data) => {
          const { status } = data;
          if (['finished', 'skipped'].includes(status)) {
            setRunTour(false);     // End tutorial
            setStepIndex(0);       // Reset for next time
          }
        }}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: '#ff914d',
          },
        }}
        locale={{
          back: 'Back',
          close: 'Close',
          last: 'Done',   // This will show "Done" on this final step
          next: 'Next',
          skip: 'Skip',
        }}
      />

      <Navbar />
      <h2 className="products-step">🛒 Our Products</h2>
      <p>Here are the items available for sale!</p>
    </div>
  );
}

