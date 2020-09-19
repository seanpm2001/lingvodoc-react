const i18n = new Map();

export const stringsToTranslate = [
  "Accept",
  "Accept Contributions",
  "Action",
  "Actions",
  "Activate",
  "Activate / Deactivate",
  "Add",
  "Add all markers of the groups to which this marker belongs to the group",
  "Add connection",
  "Add field",
  "Add lexical entry",
  "Add link",
  "Add marker to group",
  "Add new column",
  "Add news",
  "Add one or more perspectives",
  "Add one or more translations",
  "Add perspective",
  "Add Translation",
  "All",
  "Areas mode",
  "Archive",
  "Audio",
  "Authors",
  "Available corpora",
  "Available dictionaries",
  "Base blob",
  "Begin",
  "Browse",
  "By Grants",
  "By Languages",
  "Cancel",
  "Check all",
  "Choose groups for areas",
  "Clear",
  "Clear all",
  "Client type",
  "Close",
  "Cognate acoustic analysis",
  "Cognate analysis",
  "Cognate multi-language reconstruction",
  "Cognate multi-language suggestions",
  "Cognate reconstruction",
  "Cognate suggestions",
  "Columns Mapping",
  "confidence",
  "Confirm Password",
  "Connect",
  "Connected",
  "Contibutions",
  "Conversion is in progress...",
  "Convert",
  "Convert to dictionary...",
  "Corpora",
  "Corpora created",
  "Corpora names and metadata",
  "Create",
  "Created",
  "Create a new field",
  "Create a new perspective...",
  "Create corpus",
  "Create dictionary",
  "Create field",
  "Create language",
  "Create one or more perspectives",
  "Critically endangered",
  "Dashboard",
  "Data source",
  "Date",
  "Date removed from publication",
  "Deactivate",
  "Definitely endangered",
  "Delete",
  "desktop",
  "Desktop",
  "Dialeqt file",
  "Distance map",
  "Dictionaries",
  "Dictionary",
  "Dictionary created",
  "Dictionary names and metadata",
  "Disable all markers of the groups this marker belongs to.",
  "Disable marker",
  "Disconnected",
  "Display mode",
  "Edit",
  "Edit profile",
  "Email",
  "Email is required",
  "End",
  "Entities",
  "Entity matching algorithm",
  "Entity matching threshold",
  "Entity status",
  "Entity type",
  "Expedition",
  "Extinct",
  "Failed to ban user!",
  "Failed to launch sound and markup compilation!",
  "Field",
  "Field Type",
  "Fields",
  "Files",
  "Fill metadata information",
  "Filter",
  "Finish",
  "From:",
  "Full name",
  "Genre",
  "Grammar",
  "Grant",
  "Grant Issuer",
  "Grant Number",
  "Grant URL",
  "Grants",
  "Grants and organizations",
  "Group",
  "Grouping tag",
  "Has audio",
  "has linked field",
  "Help",
  "here",
  "Human settlement",
  "Image",
  "Import",
  "Import dialeqt",
  "Import Dialeqt dictionary",
  "Import Starling dictionaries",
  "Info",
  "Informant",
  "Interrogator",
  "Invalid email address",
  "Issuer URL",
  "Join",
  "Language",
  "Language degree of endangerment",
  " Language degree of endangerment (selection affects selected languages and dictionaries)",
  "Language corpora",
  "Language edit",
  "Language Selection",
  "Languages",
  "Levenshtein distance limit for entity content matching",
  "Lexical entries",
  "Link",
  "Link columns from files with each other",
  "Linking",
  "Loading",
  "Loading additional filter data...",
  "Loading suggestions...",
  "Location",
  "Login",
  "Login is required",
  "Map",
  "Map dictionaries to LingvoDoc languages",
  "Map linked columns to LingvoDoc types",
  "Maps",
  "Match translations",
  "Merge group",
  "Merge lexical entries",
  "Merged successfully",
  "Merge suggestions",
  "Merge task created successfully",
  "Message",
  "Metadata",
  "Move marker to group",
  "My corpora",
  "My dictionaries",
  "My files",
  "Name",
  "Name is required",
  "New password",
  "News editor",
  "Next Step",
  "no",
  "No audio",
  "No authors found",
  "No background tasks",
  "No entries",
  "No file selected",
  "No fields, click button below to add a new one",
  "No groups to select",
  "No language degree of endangerment found",
  "No more locales!",
  "No settlement found",
  "No suggestions",
  "No years found",
  "None",
  "Not chosen",
  "Not supported",
  "Nothing here, sorry",
  "Nothing to",
  "Number of native speakers",
  "Old password",
  "Open map",
  "OR/AND mode",
  "Organization",
  "Organization admins",
  "Organization users",
  "Off-grant projects",
  "Owners",
  "Page",
  "Parent language",
  "Password",
  "PDF file",
  "Perspective",
  "Perspectives",
  "Perspective names",
  "Perspective state",
  "Phonemic analysis",
  "Phonology",
  "Phonological statistical distance",
  "Please select a user",
  "Please, select the parent language",
  "Please sign in",
  "Processing",
  "Properties...",
  "Preview",
  "Properties",
  "Publish",
  "Publication date",
  "Publish Entities",
  "Publish result of entity merge if any merged entity is published",
  "Quantitative characteristic",
  "Refresh",
  "Reject",
  "Relation",
  "Remove",
  "Removal date",
  "Remove dictionary",
  "Remove lexical entries",
  "Remove perspective",
  "Remove user",
  "Request has been sent to the grant's owner.",
  'Requests',
  'Role',
  'Roles',
  'Safe',
  'Save',
  'Save all',
  'Save dictionary',
  'Save only published',
  'Search',
  'Search in found',
  'Select',
  'Select all',
  'Select audio',
  'Select authors',
  'Select all on current page',
  'Select data source',
  'Select dictionary',
  'Select language',
  'Select language degree of endangerment',
  'Select Language for',
  'Select languages',
  'Select Parent Language',
  'Select settlement',
  'Select tags',
  'Select user',
  'Select years',
  'selected',
  'Settlement',
  'Service',
  'Set corpora name, translations and metadata',
  'Set dictionary name, translations and metadata',
  'Severely endangered',
  'Show statistics',
  'Sign In',
  'Sign out',
  'Sign Up',
  'Sound and markup',
  'Sound and markup compilation is being created. Check out tasks for details.',
  'Split contents of the field on punctuation before matching',
  'Split contents of the field on whitespace before matching',
  'Spread',
  'Start typing language name',
  'Statistics',
  'Storage',
  'Subject',
  'Submit',
  'Show',
  'Sync',
  'Tasks',
  'The entity is currently published. Click to unpublish.',
  'The entity is NOT currently published. Click to publish.',
  'There is no languages and dictionaries with chosen language degree of endangerment. The search will be performed with all languages and dictionaries.',
  'This page is available for administrator only',
  'To:',
  'Tools',
  'total',
  'to view.',
  'Translation for',
  'Translations',
  'Type',
  'Type to search',
  'Uncheck all',
  'Unknow request type!',
  'Unknown type',
  'Up',
  'Update',
  'Update dictionary',
  'Upload',
  'Upload successful',
  'URL with results of saving data should appear soon after clicking save button in the tasks',
  'User',
  'User account activation/deactivation',
  'View',
  'View contributions',
  'View published',
  'View suggestions',
  'Vulnerable',
  'web',
  'Years',
  'yes',
  'You have selected:',
  'Your corpora is created, click',
  'Your dictionaries are scheduled for conversion. Please, check tasks tab for conversion status.',
  'Your dictionary is created, click'
];

export function getTranslation(string) {
  const translation = i18n.get(string);
  return (translation === undefined) ? string : translation;
}

function setTranslation(string, translatedString) {
  if (translatedString == null || translatedString === undefined) {
    i18n.set(string, string);
  } else {
    i18n.set(string, translatedString);
  }
}

export function setTranslations(translations) {
  for (let i = 0; i < stringsToTranslate.length; i++) {
    const gist = translations[i];
    if (gist != null) { setTranslation(stringsToTranslate[i], gist.translation); }
  }
}
