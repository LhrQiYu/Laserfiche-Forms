import qs from "querystring";
export const $http = async ({ data = {} }) => {
  const result = Object.entries(data).reduce((current, [Name, Value]) => {
    return [...current, { Name, Value }];
  }, []);
  const workFlowData = {
    Initiator: {
      InitiatorDisplayName: "Workflow",
      InitiatorName: "Workflow",
    },
    InstanceCreationFlags: 0,
    Origin: "String content",
    Originator: "String content",
    ParameterCollection: result,
    // Timestamp: "/Date(2024 - 07 - 30T13: 54:43.511Z)/",
    WorkflowName: "HysanSubmitWorkflow",
  };
  const options = {
    body: qs.stringify(workFlowData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    referrer: "no-referrer",
    cache: "no-cache",
  };
  try {
    const { status = 400, ok = false } = await fetch(process.env.NODE_ENV == 'dev' ? '/api' : process.env.VUE_APP_URL, options);
    return {
      status,
      ok: status === 200 && ok,
    };
  } catch (error) {
    throw new Error(error);
  }
};
