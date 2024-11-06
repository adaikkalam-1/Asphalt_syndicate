import requests from "./httpServices";

// ========================================== Admin =============================================

export const LoginUser = async (data) => {
  return await requests.post(`auth/login`, data);
};
// Leads
export const GetLeads = async (data) => {
  return await requests.post(`lead/list`, data);
};
export const CreateLeads = async (data) => {
  return await requests.post(`lead/create`, data);
};
export const UpdateLeads = async (id, data) => {
  return await requests.post(`lead/edit/${id}`, data);
};
export const DeleteLeads = async (id, data) => {
  return await requests.post(`lead/delete/${id}`, data);
};
export const UploadLeads = async (data) => {
  return await requests.post(`lead/excel-leads-import`, data);
};
export const UpdateLeadOwner = async (data) => {
  return await requests.post(`lead/update-lead-owner`, data);
};

// Site Visit
export const GetSiteVisit = async (data) => {
  return await requests.post(`site-visit/list`, data);
};
export const CreateSiteVisit = async (data) => {
  return await requests.post(`site-visit/create`, data);
};
export const UpdateSiteVisit = async (id, data) => {
  return await requests.post(`site-visit/edit/${id}`, data);
};
export const DeleteSiteVisit = async (id) => {
  return await requests.post(`site-visit/delete/${id}`);
};
export const UpdateLeadAgent = async (data) => {
  return await requests.post(`site-visit/update-to-site-visit`, data);
};
// Follow Up Log
export const GetFollowUpLog = async (data) => {
  return await requests.post(`lead/follow-up-log`, data);
};
export const CreateFollowUpLog = async (data) => {
  return await requests.post(`lead/follow-up-log-create`, data);
};
export const UpdateFollowUpLog = async (id, data) => {
  return await requests.post(`lead/follow-up-update/${id}`, data);
};
export const DeleteFollowUpLog = async (id) => {
  return await requests.post(`lead/follow-up-delete/${id}`);
};

// FollowUp Status
export const GetFollowUpStatus = async () => {
  return await requests.get(`lead/lead-status`);
};

// Lead Source
export const GetLeadSource = async () => {
  return await requests.get(`lead/get-lead-source`);
};
export const CreateLeadSource = async (data) => {
  return await requests.post(`lead/create-source`, data);
};
export const UpdateLeadSource = async (id, data) => {
  return await requests.post(`lead/edit-source/${id}`, data);
};
export const DeleteLeadSource = async (id) => {
  return await requests.post(`lead/delete-source/${id}`);
};
// Lead Status
export const GetLeadStatus = async () => {
  return await requests.get(`lead/lead-status`);
};
export const CreateLeadStatus = async (data) => {
  return await requests.post(`lead/lead-status`, data);
};
export const UpdateLeadStatus = async (id, data) => {
  return await requests.post(`lead/lead-status/edit/${id}`, data);
};
export const DeleteLeadStatus = async (id) => {
  return await requests.post(`lead/lead-status/delete/${id}`);
};
// Get Properties

export const GetProperties = async (data) => {
  return await requests.post(`property/list`, data);
};
export const CreateProperties = async (data) => {
  return await requests.post(`property/create`, data);
};
export const EditProperties = async (id, data) => {
  return await requests.post(`property/update/${id}`, data);
};
export const DeleteProperties = async (id) => {
  return await requests.post(`property/delete/${id}`);
};

// Get User
export const GetUsers = async () => {
  return await requests.get(`user/list`);
};
export const CreateUsers = async (data) => {
  return await requests.post(`auth/register`, data);
};
export const EditUsers = async (id, data) => {
  return await requests.post(`user/edit/${id}`, data);
};

// Get PhoneCall
export const GetPhoneCall = async (data) => {
  // console.log(data,window.location.pathname)
  return await requests.post(`phone/list`, data);
};
export const ChangesPhoneStatus = async (data) => {
  return await requests.post(`phone/change-status`, data);
};
export const CreateOutgoing = async (data) => {
  return await requests.post(`phone/outgoing`, data);
};
export const CreateKnowlarity = async (data) => {
  return await requests.post(`phone/knowlarity`, data);
};
export const UpdateFeedback = async (data) => {
  return await requests.post(`phone/update-details`, data);
};
export const WebHookOutgoing = async (data) => {
  return await requests.post(`webhook/outgoing`, data);
};
export const GetCallSettings = async () => {
  return await requests.get(`settings/get`);
};
// matchking keyword generate
export const GenerateKeyword = async (id) => {
  return await requests.post(`phone/generate-ai-keywords/${id}`);
};
export const GenerateAiFeedback = async (id) => {
  return await requests.post(`webhook/regenerate-ai-feedback/${id}`);
};

// Roles
export const GetRoles = async () => {
  return await requests.get(`roles/list`);
};
export const CreateRole = async (data) => {
  return await requests.post(`roles/create`, data);
};
export const EditRoles = async (id, data) => {
  return await requests.post(`roles/edit/${id}`, data);
};

// Companies
export const GetAllCompanies = async () => {
  return await requests.get(`company/list`);
};
export const CreateCompanies = async (data) => {
  return await requests.post(`company/create-company`, data);
};
export const EditCompanies = async (id, data) => {
  return await requests.post(`company/edit/${id}`, data);
};
// Get Email
export const GetEmail = async () => {
  return await requests.get(`email/list`);
};
export const GetEmailLog = async () => {
  return await requests.get(`email/logs`);
};
export const CreateEmailSettings = async (data) => {
  return await requests.post(`email/create`, data);
};
export const UpdateEmailSettings = async (id, data) => {
  return await requests.post(`email/edit/${id}`, data);
};
export const DeleteEmailSettings = async (id) => {
  return await requests.post(`email/delete/${id}`);
};
export const SendMail = async (data) => {
  return await requests.post(`email/send`, data);
};
export const SendTestMail = async (data) => {
  return await requests.post(`email/test-mail`, data);
};

// Template
export const CreateTemplate = async (data) => {
  return await requests.post(`email/template/create`, data);
};
export const GetTemplate = async (data) => {
  return await requests.get(`email/template/list`, data);
};
export const UpdateTemplate = async (id, data) => {
  return await requests.post(`email/template/edit/${id}`, data);
};
export const DeleteTemplate = async (id) => {
  return await requests.post(`email/template/delete/${id}`);
};
// uploadfile
export const UploadFile = async (id, data) => {
  return await requests.post(`files/upload/${id}`, data);
};
export const ConvertAudio = async (data) => {
  return await requests.post(`files/audio`, data);
};

// Task
export const CreateTask = async (data) => {
  return await requests.post(`task/create`, data);
};
export const UpdateTask = async (id, data) => {
  return await requests.post(`task/edit/${id}`, data);
};
export const DeleteTask = async (id, data) => {
  return await requests.post(`task/delete/${id}`, data);
};
export const GetTask = async (data) => {
  return await requests.get(`task/list`, data);
};

// Dashboard
export const GetDashboardUser = async () => {
  return await requests.get(`dashboard/get-user-data`);
};
export const GetDashboardSource = async (data) => {
  return await requests.post(`dashboard/get-data`, data);
};
// Duplicate lead
export const GetDuplicateLead = async (data) => {
  return await requests.post(`lead/duplicate-leads`, data);
};

// Export lead
export const exportLead = async (data) => {
  return await requests.post(`export_log/create`, data);
};
export const GetExportLead = async () => {
  return await requests.get(`export_log/list`);
};
export const ImportUpdateLead = async (data) => {
  return await requests.post(`lead/excel-leads-update`, data);
};
// whatsApp message log
export const SendMessage = async (data) => {
  return await requests.post(`message_log/create`, data);
};

export const GetMessage = async (id) => {
  return await requests.get(`message_log/get_by_lead/${id}`);
};

// super admin detail list
export const GetSuperAdminData = async (id) => {
  return await requests.get(`super-admin/get-details/${id}`);
};

export const UserDelete = async (id) => {
  return await requests.get(`auth/delete/${id}`);
};

// master Location
export const GetMasterLocation = async (data) => {
  return await requests.post(`location/list`, data);
};
export const CreateLocation = async (data) => {
  return await requests.post(`location/create`, data);
};
export const UpdateLocation = async (id, data) => {
  return await requests.post(`location/update/${id}`, data);
};
export const DeleteLocation = async (id) => {
  return await requests.post(`location/destroy/${id}`);
};
export const UploadExcelLocation = async (data) => {
  return await requests.post(`location/excel-import`, data);
};
// master ProjectType
export const GetMasterProjectType = async (data) => {
  return await requests.post(`property-type/list`, data);
};
export const CreateProjectType = async (data) => {
  return await requests.post(`property-type/create`, data);
};
export const UpdateProjectType = async (id, data) => {
  return await requests.post(`property-type/update/${id}`, data);
};
export const DeleteProjectType = async (id) => {
  return await requests.post(`property-type/destroy/${id}`);
};
export const UploadExcelProjectType = async (data) => {
  return await requests.post(`property-type/excel-import`, data);
};

// question
export const CreateQuestion = async (data) => {
  return await requests.post(`questions/create`, data);
};
export const GetQuestion = async (id) => {
  return await requests.get(`questions/listAll/${id}`);
};
export const UpdateQuestion = async (data) => {
  return await requests.post(`questions/edit`, data);
};
export const DeleteQuestion = async (id) => {
  return await requests.delete(`/questions/delete/${id}`);
};
// call settings
export const CreateNotification = async (data) => {
  return await requests.post(`settings/save`, data);
};
export const UpdateNotification = async (id, data) => {
  return await requests.post(`settings/edit/${id}`, data);
};
export const GetNotification = async (id) => {
  return await requests.get(`settings/get-by-provider/${id}`);
};

// Sitevisit Data
export const GetSiteVisitDetail = async (id) => {
  return await requests.get(`feedbacks/list/${id}`);
};
export const GetSiteVisitData = async (data) => {
  return await requests.post(`site-visit/get-by-lead-id`,data);
};
// country list
export const GetCountryCode = async (data) => {
  return await requests.post(`countries/list`,data);
};