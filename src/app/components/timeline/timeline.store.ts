import { signal } from '@angular/core';

import { WorkOrderDocument, WORK_ORDERS } from '../../data/work-orders.mock';

// setup signal for work order timeline data storage using mock data
export const workOrders = signal<WorkOrderDocument[]>(WORK_ORDERS);

// add a new work order to the timeline
export function addWorkOrder(newWorkOrder: WorkOrderDocument) {
  const currentOrders = workOrders();

  // create new docId incrementing from the last work order's id
  const newWorkOrderIdInt = currentOrders.length > 0 ? parseInt(currentOrders[currentOrders.length - 1].docId.split('-')[1]) + 1 : 1;
  newWorkOrder.docId = `WO-${newWorkOrderIdInt}`

  // update the signal with the new work order
  workOrders.update(currentOrders => [...currentOrders, newWorkOrder]);
}

// edit an existing work order in the timeline
export function editWorkOrder(updatedWorkOrder: WorkOrderDocument) {
  workOrders.update(currentOrders => {
    return currentOrders.map(order =>
      order.docId === updatedWorkOrder.docId ? updatedWorkOrder : order
    );
  });
}

// delete a work order from the timeline
export function deleteWorkOrder(docId: string) {
  workOrders.update(currentOrders =>
    currentOrders.filter(order => order.docId !== docId)
  );
}