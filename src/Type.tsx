interface FormData {
  name: string;
  client: string;
  date: { start: string; end: string };
  notes: string;
  projectType: string;
  hourly: { type: string; amount: number };
  budget: {
    type: string;
    budgetResetsEveryMonth: boolean;
    sendEmailAlerts: {
      sendEmail: boolean;
      threshold: number;
    };
  };
  selectaview: string;
  manageproject: string;
}

interface ErrorState {
  name?: boolean;
  client?: boolean;
  date?: boolean
  notes?: string;
  projectType?: boolean;
  hourly?: boolean;
  budget?:boolean;
  selectaview?: boolean;
  manageproject?: boolean;
}

export type {FormData,ErrorState}