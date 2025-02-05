import { canvasPersistDenylist } from 'features/canvas/store/canvasPersistDenylist';
import { controlAdaptersPersistDenylist } from 'features/controlAdapters/store/controlAdaptersPersistDenylist';
import { dynamicPromptsPersistDenylist } from 'features/dynamicPrompts/store/dynamicPromptsPersistDenylist';
import { galleryPersistDenylist } from 'features/gallery/store/galleryPersistDenylist';
import { nodesPersistDenylist } from 'features/nodes/store/nodesPersistDenylist';
import { generationPersistDenylist } from 'features/parameters/store/generationPersistDenylist';
import { postprocessingPersistDenylist } from 'features/parameters/store/postprocessingPersistDenylist';
import { systemPersistDenylist } from 'features/system/store/systemPersistDenylist';
import { uiPersistDenylist } from 'features/ui/store/uiPersistDenylist';
import { omit } from 'lodash-es';
import type { SerializeFunction } from 'redux-remember';

const serializationDenylist: {
  [key: string]: string[];
} = {
  canvas: canvasPersistDenylist,
  gallery: galleryPersistDenylist,
  generation: generationPersistDenylist,
  nodes: nodesPersistDenylist,
  postprocessing: postprocessingPersistDenylist,
  system: systemPersistDenylist,
  ui: uiPersistDenylist,
  controlNet: controlAdaptersPersistDenylist,
  dynamicPrompts: dynamicPromptsPersistDenylist,
};

export const serialize: SerializeFunction = (data, key) => {
  const result = omit(data, serializationDenylist[key] ?? []);
  return JSON.stringify(result);
};
