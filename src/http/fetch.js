export const $http = async ({ data = {}, packageName = "" }) => {
  const result = Object.entries(data).reduce((current, [Name, Value]) => {
      return [...current, { Name, Value }];
  }, []);
    console.log(result,8888);
  const staticJSON = {
    Initiator: {
      InitiatorDisplayName: "Workflow",
      InitiatorName: "Workflow",
    },
    InstanceCreationFlags: 0,
    Origin: "String content",
    Originator: "String content",
    ParameterCollection: result,
    Timestamp: "/Date(2024 - 07 - 30T13: 54:43.511Z)/",
    WorkflowName: packageName,
  };
  const options = {
    body: JSON.stringify(staticJSON),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    referrer: "no-referrer",
    cache: "no-cache",
  };
  try {
    const { status = 400, ok = false } = await fetch("/api/instances", options);
    return {
      status,
      ok: status === 200 && ok,
    };
  } catch (error) {
    throw new Error(error);
  }
};
