import { createMemoizedSelector } from 'app/store/createMemoizedSelector';
import { stateSelector } from 'app/store/store';
import { useAppSelector } from 'app/store/storeHooks';
import { isInvocationNode } from 'features/nodes/types/invocation';
import { getSortedFilteredFieldNames } from 'features/nodes/util/node/getSortedFilteredFieldNames';
import { TEMPLATE_BUILDER_MAP } from 'features/nodes/util/schema/buildFieldInputTemplate';
import { keys, map } from 'lodash-es';
import { useMemo } from 'react';

export const useConnectionInputFieldNames = (nodeId: string) => {
  const selector = useMemo(
    () =>
      createMemoizedSelector(stateSelector, ({ nodes, nodeTemplates }) => {
        const node = nodes.nodes.find((node) => node.id === nodeId);
        if (!isInvocationNode(node)) {
          return [];
        }
        const nodeTemplate = nodeTemplates.templates[node.data.type];
        if (!nodeTemplate) {
          return [];
        }

        // get the visible fields
        const fields = map(nodeTemplate.inputs).filter(
          (field) =>
            (field.input === 'connection' &&
              !field.type.isCollectionOrScalar) ||
            !keys(TEMPLATE_BUILDER_MAP).includes(field.type.name)
        );

        return getSortedFilteredFieldNames(fields);
      }),
    [nodeId]
  );

  const fieldNames = useAppSelector(selector);
  return fieldNames;
};
