export interface WorkOrderDocument {
  docId: string;
  docType: 'workOrder';
  data: {
    name: string;
    workCenterId: string;           // References WorkCenterDocument.docId
    status: WorkOrderStatus;
    startDate: string;              // ISO format (e.g., "2025-01-15")
    endDate: string;                // ISO format
  };
}

type WorkOrderStatus = 'open' | 'in-progress' | 'complete' | 'blocked';

export const WORK_ORDERS: WorkOrderDocument[] = [
  {
    "docId": "WO-001",
    "docType": "workOrder",
    "data": {
      "name": "Raw Material Quenching",
      "workCenterId": "WC-HEAT-01",
      "status": "complete",
      "startDate": "2026-01-02",
      "endDate": "2026-01-02"
    }
  },
  {
    "docId": "WO-002",
    "docType": "workOrder",
    "data": {
      "name": "Chassis Main Weld",
      "workCenterId": "WC-WELD-05",
      "status": "in-progress",
      "startDate": "2026-01-03",
      "endDate": "2026-01-12"
    }
  },
  {
    "docId": "WO-003",
    "docType": "workOrder",
    "data": {
      "name": "Sub-Assembly A-12",
      "workCenterId": "WC-ASSY-02",
      "status": "open",
      "startDate": "2026-01-13",
      "endDate": "2026-01-14"
    }
  },
  {
    "docId": "WO-004",
    "docType": "workOrder",
    "data": {
      "name": "Intensive Stress Testing",
      "workCenterId": "WC-TEST-09",
      "status": "blocked",
      "startDate": "2026-01-15",
      "endDate": "2026-01-25"
    }
  },
  {
    "docId": "WO-005",
    "docType": "workOrder",
    "data": {
      "name": "Precision Milling",
      "workCenterId": "WC-CNC-01",
      "status": "open",
      "startDate": "2026-01-26",
      "endDate": "2026-01-26"
    }
  },
  {
    "docId": "WO-006",
    "docType": "workOrder",
    "data": {
      "name": "Electronic Component Sourcing",
      "workCenterId": "WC-LOG-01",
      "status": "complete",
      "startDate": "2026-01-27",
      "endDate": "2026-02-15"
    }
  },
  {
    "docId": "WO-007",
    "docType": "workOrder",
    "data": {
      "name": "Surface Grinding",
      "workCenterId": "WC-FIN-02",
      "status": "in-progress",
      "startDate": "2026-02-16",
      "endDate": "2026-02-17"
    }
  },
  {
    "docId": "WO-008",
    "docType": "workOrder",
    "data": {
      "name": "Paint Primer Application",
      "workCenterId": "WC-COAT-01",
      "status": "open",
      "startDate": "2026-02-18",
      "endDate": "2026-02-18"
    }
  },
  {
    "docId": "WO-009",
    "docType": "workOrder",
    "data": {
      "name": "Industrial Curing Cycle",
      "workCenterId": "WC-OVEN-04",
      "status": "open",
      "startDate": "2026-02-19",
      "endDate": "2026-02-22"
    }
  },
  {
    "docId": "WO-010",
    "docType": "workOrder",
    "data": {
      "name": "Final Quality Certification",
      "workCenterId": "WC-QA-01",
      "status": "open",
      "startDate": "2026-02-23",
      "endDate": "2026-02-24"
    }
  },
  {
    "docId": "WO-011",
    "docType": "workOrder",
    "data": {
      "name": "Hydraulic Line Install",
      "workCenterId": "WC-ASSY-09",
      "status": "complete",
      "startDate": "2026-02-25",
      "endDate": "2026-02-28"
    }
  },
  {
    "docId": "WO-012",
    "docType": "workOrder",
    "data": {
      "name": "Software Initialization",
      "workCenterId": "WC-SOFT-01",
      "status": "in-progress",
      "startDate": "2026-03-01",
      "endDate": "2026-03-01"
    }
  },
  {
    "docId": "WO-013",
    "docType": "workOrder",
    "data": {
      "name": "Long-term Durability Run",
      "workCenterId": "WC-TEST-02",
      "status": "blocked",
      "startDate": "2026-03-02",
      "endDate": "2026-03-31"
    }
  },
  {
    "docId": "WO-014",
    "docType": "workOrder",
    "data": {
      "name": "Manual Deburring",
      "workCenterId": "WC-FIN-03",
      "status": "complete",
      "startDate": "2026-04-01",
      "endDate": "2026-04-02"
    }
  },
  {
    "docId": "WO-015",
    "docType": "workOrder",
    "data": {
      "name": "Panel Riveting",
      "workCenterId": "WC-ASSY-05",
      "status": "open",
      "startDate": "2026-04-03",
      "endDate": "2026-04-05"
    }
  },
  {
    "docId": "WO-016",
    "docType": "workOrder",
    "data": {
      "name": "PCB Population",
      "workCenterId": "WC-ELEC-01",
      "status": "complete",
      "startDate": "2026-04-06",
      "endDate": "2026-04-07"
    }
  },
  {
    "docId": "WO-017",
    "docType": "workOrder",
    "data": {
      "name": "Laser Calibration",
      "workCenterId": "WC-PREC-05",
      "status": "in-progress",
      "startDate": "2026-04-08",
      "endDate": "2026-04-08"
    }
  },
  {
    "docId": "WO-018",
    "docType": "workOrder",
    "data": {
      "name": "Acid Wash Treatment",
      "workCenterId": "WC-CHEM-01",
      "status": "open",
      "startDate": "2026-04-09",
      "endDate": "2026-04-10"
    }
  },
  {
    "docId": "WO-019",
    "docType": "workOrder",
    "data": {
      "name": "Bulk Material Handling",
      "workCenterId": "WC-LOG-02",
      "status": "blocked",
      "startDate": "2026-04-11",
      "endDate": "2026-04-15"
    }
  },
  {
    "docId": "WO-020",
    "docType": "workOrder",
    "data": {
      "name": "Micro-soldering Phase",
      "workCenterId": "WC-ELEC-02",
      "status": "open",
      "startDate": "2026-04-16",
      "endDate": "2026-04-17"
    }
  },
  {
    "docId": "WO-021",
    "docType": "workOrder",
    "data": {
      "name": "Environmental Chamber Test",
      "workCenterId": "WC-QA-09",
      "status": "complete",
      "startDate": "2026-04-18",
      "endDate": "2026-05-02"
    }
  },
  {
    "docId": "WO-022",
    "docType": "workOrder",
    "data": {
      "name": "Tire Balancing",
      "workCenterId": "WC-ASSY-11",
      "status": "in-progress",
      "startDate": "2026-05-03",
      "endDate": "2026-05-03"
    }
  },
  {
    "docId": "WO-023",
    "docType": "workOrder",
    "data": {
      "name": "Base Coat Spray",
      "workCenterId": "WC-COAT-02",
      "status": "open",
      "startDate": "2026-05-04",
      "endDate": "2026-05-05"
    }
  },
  {
    "docId": "WO-024",
    "docType": "workOrder",
    "data": {
      "name": "Interior Upholstery",
      "workCenterId": "WC-TEXT-01",
      "status": "open",
      "startDate": "2026-05-06",
      "endDate": "2026-05-10"
    }
  },
  {
    "docId": "WO-025",
    "docType": "workOrder",
    "data": {
      "name": "Optical Bench Alignment",
      "workCenterId": "WC-PREC-01",
      "status": "complete",
      "startDate": "2026-05-11",
      "endDate": "2026-05-11"
    }
  },
  {
    "docId": "WO-026",
    "docType": "workOrder",
    "data": {
      "name": "High-Temp Heat Treatment",
      "workCenterId": "WC-OVEN-01",
      "status": "in-progress",
      "startDate": "2026-05-12",
      "endDate": "2026-05-15"
    }
  },
  {
    "docId": "WO-027",
    "docType": "workOrder",
    "data": {
      "name": "Nitrogen Cooling",
      "workCenterId": "WC-COOL-01",
      "status": "open",
      "startDate": "2026-05-16",
      "endDate": "2026-05-16"
    }
  },
  {
    "docId": "WO-028",
    "docType": "workOrder",
    "data": {
      "name": "Center of Gravity Check",
      "workCenterId": "WC-QA-03",
      "status": "blocked",
      "startDate": "2026-05-17",
      "endDate": "2026-05-18"
    }
  },
  {
    "docId": "WO-029",
    "docType": "workOrder",
    "data": {
      "name": "Serialized Labeling",
      "workCenterId": "WC-PACK-02",
      "status": "open",
      "startDate": "2026-05-19",
      "endDate": "2026-05-19"
    }
  },
  {
    "docId": "WO-030",
    "docType": "workOrder",
    "data": {
      "name": "Export Crating",
      "workCenterId": "WC-LOG-01",
      "status": "open",
      "startDate": "2026-05-20",
      "endDate": "2026-05-22"
    }
  },
  {
    "docId": "WO-031",
    "docType": "workOrder",
    "data": {
      "name": "Engine Block Honing",
      "workCenterId": "WC-CNC-04",
      "status": "complete",
      "startDate": "2026-05-23",
      "endDate": "2026-05-25"
    }
  },
  {
    "docId": "WO-032",
    "docType": "workOrder",
    "data": {
      "name": "Main Seal Fitting",
      "workCenterId": "WC-ASSY-09",
      "status": "in-progress",
      "startDate": "2026-05-26",
      "endDate": "2026-05-26"
    }
  },
  {
    "docId": "WO-033",
    "docType": "workOrder",
    "data": {
      "name": "Manifold Fastening",
      "workCenterId": "WC-ASSY-09",
      "status": "open",
      "startDate": "2026-05-27",
      "endDate": "2026-05-27"
    }
  },
  {
    "docId": "WO-034",
    "docType": "workOrder",
    "data": {
      "name": "Oil Pressure Priming",
      "workCenterId": "WC-FLUID-01",
      "status": "blocked",
      "startDate": "2026-05-28",
      "endDate": "2026-05-29"
    }
  },
  {
    "docId": "WO-035",
    "docType": "workOrder",
    "data": {
      "name": "72-Hour Burn-in",
      "workCenterId": "WC-TEST-05",
      "status": "open",
      "startDate": "2026-05-30",
      "endDate": "2026-06-02"
    }
  },
  {
    "docId": "WO-036",
    "docType": "workOrder",
    "data": {
      "name": "Ultrasonic Cleaning",
      "workCenterId": "WC-FIN-05",
      "status": "complete",
      "startDate": "2026-06-03",
      "endDate": "2026-06-03"
    }
  },
  {
    "docId": "WO-037",
    "docType": "workOrder",
    "data": {
      "name": "Ergonomic Grip Install",
      "workCenterId": "WC-ASSY-12",
      "status": "in-progress",
      "startDate": "2026-06-04",
      "endDate": "2026-06-04"
    }
  },
  {
    "docId": "WO-038",
    "docType": "workOrder",
    "data": {
      "name": "Acrylic Shield Fitting",
      "workCenterId": "WC-ASSY-12",
      "status": "open",
      "startDate": "2026-06-05",
      "endDate": "2026-06-06"
    }
  },
  {
    "docId": "WO-039",
    "docType": "workOrder",
    "data": {
      "name": "Fiberglass Layering",
      "workCenterId": "WC-ASSY-08",
      "status": "open",
      "startDate": "2026-06-07",
      "endDate": "2026-06-12"
    }
  },
  {
    "docId": "WO-040",
    "docType": "workOrder",
    "data": {
      "name": "RF Interference Sweep",
      "workCenterId": "WC-ASSY-08",
      "status": "complete",
      "startDate": "2026-06-13",
      "endDate": "2026-06-13"
    }
  },
  {
    "docId": "WO-041",
    "docType": "workOrder",
    "data": {
      "name": "Heavy Lift Mechanism",
      "workCenterId": "WC-ASSY-03",
      "status": "in-progress",
      "startDate": "2026-06-14",
      "endDate": "2026-06-20"
    }
  },
  {
    "docId": "WO-042",
    "docType": "workOrder",
    "data": {
      "name": "Battery Cell Balancing",
      "workCenterId": "WC-TEST-02",
      "status": "open",
      "startDate": "2026-06-21",
      "endDate": "2026-06-25"
    }
  },
  {
    "docId": "WO-043",
    "docType": "workOrder",
    "data": {
      "name": "Chassis Underseal",
      "workCenterId": "WC-COAT-03",
      "status": "blocked",
      "startDate": "2026-06-26",
      "endDate": "2026-06-26"
    }
  },
  {
    "docId": "WO-044",
    "docType": "workOrder",
    "data": {
      "name": "Wheel Hub Integration",
      "workCenterId": "WC-ASSY-15",
      "status": "open",
      "startDate": "2026-06-27",
      "endDate": "2026-06-27"
    }
  },
  {
    "docId": "WO-045",
    "docType": "workOrder",
    "data": {
      "name": "ABS Calibration",
      "workCenterId": "WC-TEST-08",
      "status": "complete",
      "startDate": "2026-06-28",
      "endDate": "2026-06-28"
    }
  },
  {
    "docId": "WO-046",
    "docType": "workOrder",
    "data": {
      "name": "Leather Stretching",
      "workCenterId": "WC-TEXT-01",
      "status": "in-progress",
      "startDate": "2026-06-29",
      "endDate": "2026-07-05"
    }
  },
  {
    "docId": "WO-047",
    "docType": "workOrder",
    "data": {
      "name": "Console Harnessing",
      "workCenterId": "WC-ASSY-11",
      "status": "open",
      "startDate": "2026-07-06",
      "endDate": "2026-07-07"
    }
  },
  {
    "docId": "WO-048",
    "docType": "workOrder",
    "data": {
      "name": "Tempered Glass Install",
      "workCenterId": "WC-GLAS-01",
      "status": "open",
      "startDate": "2026-07-08",
      "endDate": "2026-07-08"
    }
  },
  {
    "docId": "WO-049",
    "docType": "workOrder",
    "data": {
      "name": "Servo Test Cycle",
      "workCenterId": "WC-ASSY-11",
      "status": "complete",
      "startDate": "2026-07-09",
      "endDate": "2026-07-11"
    }
  },
  {
    "docId": "WO-050",
    "docType": "workOrder",
    "data": {
      "name": "Lidar Calibration",
      "workCenterId": "WC-QA-05",
      "status": "in-progress",
      "startDate": "2026-07-12",
      "endDate": "2026-07-15"
    }
  },
  {
    "docId": "WO-051",
    "docType": "workOrder",
    "data": {
      "name": "Door Insulation",
      "workCenterId": "WC-ASSY-05",
      "status": "open",
      "startDate": "2026-07-16",
      "endDate": "2026-07-16"
    }
  },
  {
    "docId": "WO-052",
    "docType": "workOrder",
    "data": {
      "name": "Bio-Metric Lock Synch",
      "workCenterId": "WC-QA-02",
      "status": "blocked",
      "startDate": "2026-07-17",
      "endDate": "2026-07-20"
    }
  },
  {
    "docId": "WO-053",
    "docType": "workOrder",
    "data": {
      "name": "Impact Bar Mounting",
      "workCenterId": "WC-ASSY-05",
      "status": "open",
      "startDate": "2026-07-21",
      "endDate": "2026-07-22"
    }
  },
  {
    "docId": "WO-054",
    "docType": "workOrder",
    "data": {
      "name": "Firmware Patch v4.0",
      "workCenterId": "WC-SOFT-02",
      "status": "complete",
      "startDate": "2026-07-23",
      "endDate": "2026-07-23"
    }
  },
  {
    "docId": "WO-055",
    "docType": "workOrder",
    "data": {
      "name": "Audio Frequency Tuning",
      "workCenterId": "WC-TEST-08",
      "status": "in-progress",
      "startDate": "2026-07-24",
      "endDate": "2026-07-24"
    }
  },
  {
    "docId": "WO-056",
    "docType": "workOrder",
    "data": {
      "name": "Graphene Wax Coat",
      "workCenterId": "WC-FIN-01",
      "status": "open",
      "startDate": "2026-07-25",
      "endDate": "2026-07-25"
    }
  },
  {
    "docId": "WO-057",
    "docType": "workOrder",
    "data": {
      "name": "Anti-Corrosion Bath",
      "workCenterId": "WC-COAT-03",
      "status": "open",
      "startDate": "2026-07-26",
      "endDate": "2026-07-30"
    }
  },
  {
    "docId": "WO-058",
    "docType": "workOrder",
    "data": {
      "name": "Titanium Alloy Weld",
      "workCenterId": "WC-WELD-02",
      "status": "complete",
      "startDate": "2026-07-31",
      "endDate": "2026-08-05"
    }
  },
  {
    "docId": "WO-059",
    "docType": "workOrder",
    "data": {
      "name": "Silencer Packing",
      "workCenterId": "WC-ASSY-07",
      "status": "in-progress",
      "startDate": "2026-08-06",
      "endDate": "2026-08-06"
    }
  },
  {
    "docId": "WO-060",
    "docType": "workOrder",
    "data": {
      "name": "Gas Analysis",
      "workCenterId": "WC-TEST-12",
      "status": "open",
      "startDate": "2026-08-07",
      "endDate": "2026-08-07"
    }
  },
  {
    "docId": "WO-061",
    "docType": "workOrder",
    "data": {
      "name": "Vacuum Integrity Test",
      "workCenterId": "WC-TEST-10",
      "status": "blocked",
      "startDate": "2026-08-08",
      "endDate": "2026-08-10"
    }
  },
  {
    "docId": "WO-062",
    "docType": "workOrder",
    "data": {
      "name": "Stator Winding",
      "workCenterId": "WC-ELEC-05",
      "status": "open",
      "startDate": "2026-08-11",
      "endDate": "2026-08-14"
    }
  },
  {
    "docId": "WO-063",
    "docType": "workOrder",
    "data": {
      "name": "Drive Motor Seating",
      "workCenterId": "WC-ASSY-01",
      "status": "complete",
      "startDate": "2026-08-15",
      "endDate": "2026-08-15"
    }
  },
  {
    "docId": "WO-064",
    "docType": "workOrder",
    "data": {
      "name": "Coolant Manifold Test",
      "workCenterId": "WC-TEST-04",
      "status": "in-progress",
      "startDate": "2026-08-16",
      "endDate": "2026-08-17"
    }
  },
  {
    "docId": "WO-065",
    "docType": "workOrder",
    "data": {
      "name": "Refrigerant Fill",
      "workCenterId": "WC-FLUID-02",
      "status": "open",
      "startDate": "2026-08-18",
      "endDate": "2026-08-18"
    }
  },
  {
    "docId": "WO-066",
    "docType": "workOrder",
    "data": {
      "name": "Tensioner Alignment",
      "workCenterId": "WC-ASSY-01",
      "status": "open",
      "startDate": "2026-08-19",
      "endDate": "2026-08-19"
    }
  },
  {
    "docId": "WO-067",
    "docType": "workOrder",
    "data": {
      "name": "BGA Chip Mount",
      "workCenterId": "WC-SLDR-01",
      "status": "complete",
      "startDate": "2026-08-20",
      "endDate": "2026-08-20"
    }
  },
  {
    "docId": "WO-068",
    "docType": "workOrder",
    "data": {
      "name": "High Voltage Leakage",
      "workCenterId": "WC-TEST-06",
      "status": "in-progress",
      "startDate": "2026-08-21",
      "endDate": "2026-08-25"
    }
  },
  {
    "docId": "WO-069",
    "docType": "workOrder",
    "data": {
      "name": "Ruggedized Case Assy",
      "workCenterId": "WC-ASSY-14",
      "status": "open",
      "startDate": "2026-08-26",
      "endDate": "2026-08-27"
    }
  },
  {
    "docId": "WO-070",
    "docType": "workOrder",
    "data": {
      "name": "Barcode Etching",
      "workCenterId": "WC-PACK-03",
      "status": "blocked",
      "startDate": "2026-08-28",
      "endDate": "2026-08-28"
    }
  },
  {
    "docId": "WO-071",
    "docType": "workOrder",
    "data": {
      "name": "Custom Inserts Prep",
      "workCenterId": "WC-PACK-01",
      "status": "open",
      "startDate": "2026-08-29",
      "endDate": "2026-08-30"
    }
  },
  {
    "docId": "WO-072",
    "docType": "workOrder",
    "data": {
      "name": "Final Manual Print",
      "workCenterId": "WC-PACK-01",
      "status": "complete",
      "startDate": "2026-08-31",
      "endDate": "2026-08-31"
    }
  },
  {
    "docId": "WO-073",
    "docType": "workOrder",
    "data": {
      "name": "Heat Seal Wrap",
      "workCenterId": "WC-PACK-04",
      "status": "in-progress",
      "startDate": "2026-09-01",
      "endDate": "2026-09-02"
    }
  },
  {
    "docId": "WO-074",
    "docType": "workOrder",
    "data": {
      "name": "Anti-Static Bagging",
      "workCenterId": "WC-LOG-02",
      "status": "open",
      "startDate": "2026-09-03",
      "endDate": "2026-09-03"
    }
  },
  {
    "docId": "WO-075",
    "docType": "workOrder",
    "data": {
      "name": "Manifest Verification",
      "workCenterId": "WC-OFF-01",
      "status": "open",
      "startDate": "2026-09-04",
      "endDate": "2026-09-04"
    }
  },
  {
    "docId": "WO-076",
    "docType": "workOrder",
    "data": {
      "name": "HEPA Filter Validation",
      "workCenterId": "WC-QA-04",
      "status": "complete",
      "startDate": "2026-09-05",
      "endDate": "2026-09-10"
    }
  },
  {
    "docId": "WO-077",
    "docType": "workOrder",
    "data": {
      "name": "Sump Pump Sealing",
      "workCenterId": "WC-ASSY-06",
      "status": "in-progress",
      "startDate": "2026-09-11",
      "endDate": "2026-09-12"
    }
  },
  {
    "docId": "WO-078",
    "docType": "workOrder",
    "data": {
      "name": "Gasket Leak Probe",
      "workCenterId": "WC-QA-04",
      "status": "open",
      "startDate": "2026-09-13",
      "endDate": "2026-09-13"
    }
  },
  {
    "docId": "WO-079",
    "docType": "workOrder",
    "data": {
      "name": "Main Frame Riveting",
      "workCenterId": "WC-ASSY-06",
      "status": "blocked",
      "startDate": "2026-09-14",
      "endDate": "2026-10-01"
    }
  },
  {
    "docId": "WO-080",
    "docType": "workOrder",
    "data": {
      "name": "Ignition Coil Test",
      "workCenterId": "WC-PREP-02",
      "status": "open",
      "startDate": "2026-10-02",
      "endDate": "2026-10-02"
    }
  },
  {
    "docId": "WO-081",
    "docType": "workOrder",
    "data": {
      "name": "Wire Harness Lacing",
      "workCenterId": "WC-TEST-07",
      "status": "complete",
      "startDate": "2026-10-03",
      "endDate": "2026-10-15"
    }
  },
  {
    "docId": "WO-082",
    "docType": "workOrder",
    "data": {
      "name": "Terminal Crimping",
      "workCenterId": "WC-WIRE-02",
      "status": "in-progress",
      "startDate": "2026-10-16",
      "endDate": "2026-10-16"
    }
  },
  {
    "docId": "WO-083",
    "docType": "workOrder",
    "data": {
      "name": "Junction Box Seal",
      "workCenterId": "WC-WIRE-02",
      "status": "open",
      "startDate": "2026-10-17",
      "endDate": "2026-10-17"
    }
  },
  {
    "docId": "WO-084",
    "docType": "workOrder",
    "data": {
      "name": "Strain Relief Fitting",
      "workCenterId": "WC-WIRE-02",
      "status": "open",
      "startDate": "2026-10-18",
      "endDate": "2026-10-18"
    }
  },
  {
    "docId": "WO-085",
    "docType": "workOrder",
    "data": {
      "name": "Circuit Isolation Test",
      "workCenterId": "WC-TEST-07",
      "status": "complete",
      "startDate": "2026-10-19",
      "endDate": "2026-10-20"
    }
  },
  {
    "docId": "WO-086",
    "docType": "workOrder",
    "data": {
      "name": "Bearings Pre-Load",
      "workCenterId": "WC-PREP-03",
      "status": "in-progress",
      "startDate": "2026-10-21",
      "endDate": "2026-10-21"
    }
  },
  {
    "docId": "WO-087",
    "docType": "workOrder",
    "data": {
      "name": "Geartrain Mesh Adjustment",
      "workCenterId": "WC-ASSY-16",
      "status": "open",
      "startDate": "2026-10-22",
      "endDate": "2026-10-28"
    }
  },
  {
    "docId": "WO-088",
    "docType": "workOrder",
    "data": {
      "name": "Torsional Vibe Scan",
      "workCenterId": "WC-QA-06",
      "status": "blocked",
      "startDate": "2026-10-29",
      "endDate": "2026-11-05"
    }
  },
  {
    "docId": "WO-089",
    "docType": "workOrder",
    "data": {
      "name": "Drive Shaft Polish",
      "workCenterId": "WC-ASSY-16",
      "status": "open",
      "startDate": "2026-11-06",
      "endDate": "2026-11-06"
    }
  },
  {
    "docId": "WO-090",
    "docType": "workOrder",
    "data": {
      "name": "Transmission Fluid X-Ray",
      "workCenterId": "WC-QA-06",
      "status": "complete",
      "startDate": "2026-11-07",
      "endDate": "2026-11-10"
    }
  },
  {
    "docId": "WO-091",
    "docType": "workOrder",
    "data": {
      "name": "Synchro Hub Lap",
      "workCenterId": "WC-TEST-15",
      "status": "in-progress",
      "startDate": "2026-11-11",
      "endDate": "2026-11-11"
    }
  },
  {
    "docId": "WO-092",
    "docType": "workOrder",
    "data": {
      "name": "Clutch Disc Soak",
      "workCenterId": "WC-ASSY-16",
      "status": "open",
      "startDate": "2026-11-12",
      "endDate": "2026-11-15"
    }
  },
  {
    "docId": "WO-093",
    "docType": "workOrder",
    "data": {
      "name": "Case Halve Joining",
      "workCenterId": "WC-ASSY-16",
      "status": "open",
      "startDate": "2026-11-16",
      "endDate": "2026-11-16"
    }
  },
  {
    "docId": "WO-094",
    "docType": "workOrder",
    "data": {
      "name": "Degreasing Cycle",
      "workCenterId": "WC-PREP-03",
      "status": "complete",
      "startDate": "2026-11-17",
      "endDate": "2026-11-17"
    }
  },
  {
    "docId": "WO-095",
    "docType": "workOrder",
    "data": {
      "name": "Reverse Sensor Cal",
      "workCenterId": "WC-WIRE-03",
      "status": "in-progress",
      "startDate": "2026-11-18",
      "endDate": "2026-11-18"
    }
  },
  {
    "docId": "WO-096",
    "docType": "workOrder",
    "data": {
      "name": "Cable Routing Fix",
      "workCenterId": "WC-WIRE-03",
      "status": "open",
      "startDate": "2026-11-19",
      "endDate": "2026-11-19"
    }
  },
  {
    "docId": "WO-097",
    "docType": "workOrder",
    "data": {
      "name": "Sealing Compound Cure",
      "workCenterId": "WC-QA-07",
      "status": "blocked",
      "startDate": "2026-11-20",
      "endDate": "2026-12-05"
    }
  },
  {
    "docId": "WO-098",
    "docType": "workOrder",
    "data": {
      "name": "Protective Underside Plate",
      "workCenterId": "WC-ASSY-17",
      "status": "open",
      "startDate": "2026-12-06",
      "endDate": "2026-12-07"
    }
  },
  {
    "docId": "WO-099",
    "docType": "workOrder",
    "data": {
      "name": "Fuel Injector Bench Sync",
      "workCenterId": "WC-ASSY-17",
      "status": "complete",
      "startDate": "2026-12-08",
      "endDate": "2026-12-15"
    }
  },
  {
    "docId": "WO-100",
    "docType": "workOrder",
    "data": {
      "name": "Year-End Inventory Lock",
      "workCenterId": "WC-FLUID-03",
      "status": "open",
      "startDate": "2026-12-16",
      "endDate": "2026-12-31"
    }
  }
];