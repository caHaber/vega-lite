/**
 * Utility files for producing Vega ValueRef for marks
 */
import {ArcPositionChannel, getOffsetChannel, PositionChannel} from '../../../channel';
import {MarkDef} from '../../../mark';

export function getOffset(channel: PositionChannel | ArcPositionChannel, markDef: MarkDef) {
  const offsetChannel = getOffsetChannel(channel);

  // TODO: in the future read from encoding channel too
  const markDefOffsetValue = markDef[offsetChannel];
  if (markDefOffsetValue) {
    return markDefOffsetValue;
  }

  return undefined;
}
