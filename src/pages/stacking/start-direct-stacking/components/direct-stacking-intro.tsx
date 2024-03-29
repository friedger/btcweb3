import { Flex } from "@stacks/ui";
import { Title } from "@components/title";

import { EstimatedMinimumLabel } from "../../components/estimated-minimum-label";
import { NextCycleStartTime } from "../../components/next-cycle-start-time";
import { StackingDescription } from "../../components/stacking-description";

interface StackingIntroProps {
  /**
   * Time, in seconds, until the start of the next cycle.
   */
  timeUntilNextCycle: number;

  /**
   * Extimated amount of uSTX needed to start stacking.
   */
  estimatedStackingMinimum: bigint;
}
export function DirectStackingIntro(props: StackingIntroProps) {
  const { timeUntilNextCycle, estimatedStackingMinimum } = props;
  return (
    <>
      <Title>Stack by yourself</Title>
      <StackingDescription mt="base-loose">
        When you stack by yourself, you’ll get the chance to earn Bitcoin each
        cycle for every reward slot that you hold.
      </StackingDescription>
      <StackingDescription mt="base">
        The STX required per reward slot can fluctuate from cycle to cycle. If
        you’re close to the current minimum, consider pooling instead to help
        make sure you don’t end up without rewards.
      </StackingDescription>
      <Flex alignItems="baseline">
        <NextCycleStartTime timeUntilNextCycle={timeUntilNextCycle} mt="40px" />
        <EstimatedMinimumLabel
          ml="extra-loose"
          estimatedStackingMinimum={estimatedStackingMinimum}
        />
      </Flex>
    </>
  );
}
