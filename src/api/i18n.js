import { getLocaleId } from "api/locale";
import config from "config";

const i18n = new Map();

export const stringsToTranslate = [
  " Language degree of endangerment (selection affects selected languages and dictionaries)",
  "(for example, Eastern Mansi) as well as those that are in danger of extinction (that is, languages that have no more than 10 speakers over 60 years old left).",
  ".docx file does not have any tables",
  ".docx file for convertion:",
  ".eaf file",
  "300 text corpora",
  "A chance for many researchers to work simultaneously and independently",
  "A possibility to automatically check for errors in the processed data",
  "ablative",
  "About",
  "About the organization",
  "absolutive",
  "Accept",
  "Accept all selected",
  "Accept Contributions",
  "Accepted",
  "Accepted by",
  "accepted first",
  "accepted last",
  "accusative",
  "Action",
  "Actions",
  "Activate",
  "Activate / Deactivate",
  "Add",
  "Add all markers of the groups to which this marker belongs to the group",
  "Add AND block",
  "Add AND condition",
  "Add connection",
  "Add dictionaries of other language groups",
  "Add field",
  "Add lexical entry",
  "Add link",
  "Add marker to group",
  "Add new column",
  "Add new field",
  "Add new translation gist",
  "Add news",
  "Add one or more perspectives",
  "Add one or more translations",
  "Add OR block",
  "Add OR condition",
  "Add organization",
  "Add perspective",
  "Add to markup",
  "Add to TOC",
  "Add Translation",
  "Add translation",
  "Add variant",
  "Add words and transcriptions from paradigms to lexical entries",
  "Adding",
  "Additional code",
  "additive",
  "adessiv",
  "adjective",
  "Administrate",
  "Administrators",
  "adverb(ial)",
  "affirmative",
  "agent-like argument of canonical transitive verb",
  "alignment .docx",
  "All",
  "All entries",
  "All tables",
  "allative",
  "Amount of Lexical and Paradigmatic entries",
  "An option to create results of intellectual activity (RIAs) for the needs of writing reports and working with data",
  "an option to save the online map one has created as a link, and its automatic update when adding new materials to LingvoDoc",
  "analysis of cognates, phonemes and allophones",
  "AND",
  "and",
  "AND block",
  "antipassive",
  "Apply filter",
  "Archive",
  "Are you sure you want to delete dictionary",
  "Are you sure you want to delete file",
  "Are you sure you want to delete perspective",
  "Are you sure you want to remove selected element from markup?",
  "Areas mode",
  "article",
  "Ask questions about the LingvoDoc program at",
  "assertive",
  "assumptive",
  "Attached to another group.",
  "attributive",
  "Audio",
  "Authors",
  "automatic creation of dictionaries from text corpora",
  "automatic segmentation of native speaker surveys, uploaded into the Telegram channel “LingvoDoc Support”, into separate words",
  "auxiliary",
  "Available corpora",
  "Available dictionaries",
  "Back",
  "Base blob",
  "Become a member",
  "Become an administrator",
  "Begin",
  "Beloborodov Ivan Borisovich",
  "benefactive",
  "Bibliographic data of the source",
  "Bibliographic data of the translation",
  "Bogomolov Igor Vladimirovich",
  "Borisenko Oleg Dmitrievich",
  "Browse",
  "By Grants",
  "By Languages",
  "By Organizations",
  "Can approve lexical entries and publish",
  "Can create dictionary roles and assign collaborators",
  "Can create lexical entries",
  "Can create perspective roles and assign collaborators",
  "Can create perspectives",
  "Can deactivate lexical entries",
  "Can delete dictionary",
  "Can delete lexical entries and entities",
  "Can delete perspective",
  "Can edit dictionary options",
  "Can edit dictionary status",
  "Can edit perspective",
  "Can edit perspective status",
  "Can get dictionary role list",
  "Can get perspective role list",
  "Can merge dictionaries and perspectives",
  "Can resign users from dictionary editors",
  "Can resign users from perspective editors",
  "Can view published lexical entries",
  "Can view unpublished lexical entries",
  "Cancel",
  "Case",
  "Case",
  "Case-sensitive",
  "causative",
  "check .docx",
  "check .txt",
  "Check all",
  "Choose groups for areas",
  "Choose what?",
  "classifier",
  "Clear",
  "Clear all",
  "Clear completed",
  "Client type",
  "Close",
  "Cognate acoustic analysis",
  "Cognate analysis",
  "Cognate multi-language analysis",
  "Cognate multi-language reconstruction",
  "Cognate multi-language suggestions",
  "Cognate multi-language suggestions (disabled, perspective is not published)",
  "Cognate reconstruction",
  "Cognate suggestions",
  "Cognate suggestions (disabled, perspective is not published)",
  "Columns Mapping",
  "comitative",
  "comparativ",
  "Compute",
  "Computing",
  "computing modules of the system",
  "conditional",
  "confidence",
  "Confirm Password",
  "Confirmation",
  "Connect",
  "Connected",
  "Contacts",
  "Contibutions",
  "continius",
  "continuative",
  "Contributions",
  "converb",
  "Conversion is in progress...",
  "Convert",
  "Convert additional markup",
  "Convert to dictionary...",
  "Converted successfully",
  "Converting",
  "Convertion error",
  "Convertion failed",
  "Corpora",
  "Corpora created",
  "Corpus names and metadata",
  "Could not get user information",
  "Create",
  "Create a new field",
  "Create a new perspective...",
  "Create corpus",
  "Create dictionary",
  "Create field",
  "Create language",
  "Create new",
  "Create new perspective",
  "Create one or more perspectives",
  "Create organization",
  "Create valency data",
  "Created",
  "Created at",
  "Created by",
  "Created valency data.",
  "creating any columns; adding any text, audio files, marking spectrograms using the Praat phonetic software; creating etymological connections between words from different dictionaries",
  "creating search queries of any type of complexity and plotting them on the map",
  "Creating valency data...",
  "Critically endangered",
  "cuncative",
  "Dashboard",
  "data processing and analysis software: phonetic analysis; search for etymologies; analysis of cognates in dialects and several languages; acoustic analysis of cognates; measuring phonological statistical distance; phonemic analysis; reconstruction of cognates in dialects and several languages",
  "data processing with existing parsers (for the Erzya, Moksha, Udmurt, Komi, Kazakh, Tatar languages) or creating new parsers quickly and integrating them into LingvoDoc",
  "Data source",
  "Date",
  "Date removed from publication",
  "dative",
  "Deactivate",
  "declarative",
  "definite",
  "Definitely endangered",
  "Delete",
  "Delete image file",
  "Delete markup file",
  "Delete organization",
  "Delete sound file",
  "Deleting",
  "deliberativ",
  "demonstrative",
  "Designed for compiling, analyzing and storing dictionaries, corpora and concordances of various languages and dialects.",
  "Desktop",
  "desktop",
  "determiner",
  "development of the architecture and core of the system",
  "development of the system core",
  "Dialeqt",
  "Dialeqt file",
  "Dictionaries",
  "Dictionaries created out of grant",
  "Dictionary",
  "Dictionary created",
  "Dictionary data loading error",
  "Dictionary info loading error",
  "Dictionary names",
  "Dictionary names and metadata",
  "Disable all markers of the groups this marker belongs to.",
  "Disable marker",
  "Disconnected",
  "Display mode",
  "Distance map",
  "distributive",
  "Doesn't have etymology",
  "dual",
  "durative",
  "Dybo Anna Vladimirovna",
  "Edit",
  "Edit interface translations",
  "Edit of the dialects classification",
  "Edit profile",
  "Edit translations",
  "editor-in-chief of the website",
  "elatv",
  "Elecard-Med LLC",
  "Email",
  "Email is required",
  "Empty search query and no language/metadata conditions",
  "Empty substrings are not allowed",
  "End",
  "Entities",
  "Entity matching algorithm",
  "Entity matching threshold",
  "Entity status",
  "Entity type",
  "ergative",
  "essiv",
  "Exclude adoptions",
  "exclusive",
  "Execute",
  "Expedition",
  "Export to XLSX",
  "Extinct",
  "extinct languages",
  "Failed search query!",
  "Failed to add",
  "Failed to ban user!",
  "Failed to delete organization",
  "Failed to get search link, please contact administrators.",
  "Failed to launch sound and markup compilation!",
  "Failed to launch valency data compilation!",
  "Failed to merge selected lexical entries, please contact developers.",
  "Failed to remove",
  "Failed to start convertion to a new dictionary!",
  "Failed to start dictionary update!",
  "feminine",
  "Field",
  "Field Type",
  "Fields",
  "File selection",
  "Files",
  "Fill metadata information",
  "Filter",
  "Filtered verbs",
  "Finish",
  "first person",
  "Focus",
  "Follow the link to learn more about using these options:",
  "For the time being Distance Map functionality is available only for the administrator.",
  "Found",
  "From",
  "from TOC",
  "From:",
  "frontend",
  "Full name",
  "Full string",
  "future",
  "General error, please contact administrators.",
  "genitive",
  "Genre",
  "Genus",
  "Get link to search results",
  "Getting link to search results",
  "Go",
  "Go to page",
  "Grammar",
  "Grant",
  "Grant Issuer",
  "Grant Number",
  "Grant URL",
  "Grants",
  "Grants and organizations",
  "GraphQL error: Request already exists.",
  "Group",
  "Group doesn't have any unmerged lexical entries left.",
  "Grouping tag",
  "habitualis",
  "Has audio",
  "Has etymology",
  "has linked field",
  "Help",
  "here",
  "Human settlement",
  "Ignore adoptions",
  "Ignore diacritics",
  "Ignore etymology",
  "illative",
  "Image",
  "imperative",
  "imperfective",
  "Import",
  "Import dialeqt",
  "Import Dialeqt dictionary",
  "Import Excel and Starling dictionaries",
  "Import Starling dictionaries",
  "In processing",
  "inclusive",
  "indefinite",
  "indicative",
  "indirective",
  "Individual work",
  "inessiv",
  "infinitive",
  "Info",
  "Informant",
  "input file is not a .docx format file",
  "Instances",
  "Institute of Linguistics Russian Academy of Sciences",
  "instrumental",
  "Interrogator",
  "intersections",
  "intransitive",
  "Invalid email address",
  "Invalid regular expression",
  "Invalid search condition matching type, please contact administrators",
  "Ipatov Stepan Anatolievich",
  "irrealis",
  "Issuer URL",
  "It currently contains",
  "It keeps records on some",
  "It stores",
  "Items per page",
  "iterative",
  "Ivannikov Institute for System Programming of the Russian Academy of Sciences",
  "Join",
  "Keep",
  "Language",
  "Language corpora",
  "Language databases",
  "Language degree of endangerment",
  "Language edit",
  "Language genetic proximity map",
  "Language Selection",
  "Languages",
  "Last modified at",
  "Levenshtein distance limit for entity content matching",
  "Lexical entries",
  "Lexical entries not found",
  "Library of linguistic maps",
  "License",
  "limitative",
  "Lingvodoc creators",
  "Lingvodoc Github",
  "LingvoDoc is a linguistic platform.",
  "Link",
  "Link columns from files with each other",
  "Link data loading error, please contact administrators.",
  "Link requested",
  "Link to search results:",
  "Linked organizations:",
  "Linking",
  "Loading",
  "Loading additional filter data...",
  "Loading dictionary data",
  "Loading field data",
  "Loading field template",
  "Loading language data",
  "Loading locale data",
  "Loading markup data",
  "Loading metadata",
  "Loading perspective data",
  "Loading role data",
  "Loading suggestions...",
  "Loading tag data",
  "Loading valency data...",
  "Locale data loading error",
  "Location",
  "locative",
  "Login",
  "Login is required",
  "Many dialects have already disappeared, and the LingvoDoc platform holds data from archives, which are presently stacked and inaccessible.",
  "Map",
  "map",
  "Map dictionaries to LingvoDoc languages",
  "Map linked columns to LingvoDoc types",
  "Map of the languages and dialects",
  "mapping geographic areas",
  "Maps",
  "Markup data loading error",
  "masculine",
  "Match",
  "Match translations",
  "Members",
  "Merge all",
  "Merge group",
  "Merge error",
  "Merge lexical entries",
  "Merge lexical entries by meaning",
  "Merge selected on current page",
  "Merge suggestions",
  "Merge task created successfully",
  "Merged successfully",
  "Merges are disabled due to an error, please contact developers.",
  "Merging selected on current page...",
  "Message",
  "Metadata",
  "Metadata loading error, please contact adiministrators.",
  "Mikhail Oslon",
  "Mood / Form",
  "Mood / Form",
  "More than",
  "more than 1000 audio dictionaries",
  "Move marker to group",
  "My corpora",
  "My dictionaries",
  "My files",
  "Name",
  "Name is required",
  "Naumova Alexandra Vladimirovna",
  "negation, negative",
  "neuter",
  "New organization",
  "New password",
  "News editor",
  "Next",
  "Next Step",
  "No",
  "no",
  "No audio",
  "No authors found",
  "No background tasks",
  "No coordinate data",
  "No data found for analysis, please select another dictionary",
  "No entries",
  "No fields, click button below to add a new one",
  "No file selected",
  "No filtered verbs",
  "No groups to select",
  "No header",
  "No instances",
  "No language degree of endangerment found",
  "No languages found",
  "No more locales!",
  "No parsing",
  "no prefix",
  "No settlement found",
  "No statistics for the selected period",
  "No suggestions",
  "No translations.",
  "No verbs",
  "No years found",
  "nominative",
  "None",
  "Normanskaya Julia Viktorovna",
  "Not chosen",
  "Not supported",
  "Nothing here, sorry",
  "Nothing to",
  "Number",
  "Number of native speakers",
  "object",
  "off",
  "Off-grant projects",
  "Old password",
  "on",
  "on the endangered languages of Russia",
  "Only entries of paradigmatic annotated forms",
  "Only registered users can convert .docx to .eaf.",
  "Only registered users can create new search links",
  "Only registered users can work with valency data.",
  "Only to entries lacking words and transcriptions",
  "Open map",
  "Opportunities",
  "optative",
  "OR",
  "or at",
  "OR block",
  "OR/AND mode",
  "Or, if you would like to search just for dictionaries and perspective based on metadata, delete all search conditions",
  "Organization",
  "Organization admins",
  "Organization name",
  "Organization users",
  "Organizations",
  "Organizations available to link to:",
  "Owners",
  "Page",
  "Parent language",
  "Parser execution",
  "Parser task has been started",
  "participle",
  "particle",
  "passive",
  "Password",
  "Passwords do not match",
  "past",
  "past recent",
  "patient-like argument of canonical transitive verb",
  "Pavel Grashchenkov",
  "PDF",
  "perfect",
  "perfective",
  "Person",
  "Perspective",
  "perspective",
  "Perspective does not have any grouping fields, cognate analysis is impossible.",
  "Perspective info loading error",
  "Perspective names",
  "Perspective state",
  "Perspectives",
  "Phonemic analysis",
  "Phonological statistical distance",
  "Phonology",
  "Please add either search conditions or language/metadata conditions",
  "Please contact developers at",
  "Please either narrow down search conditions or add grammatical signs conditions",
  "Please map all Starling columns to Lingvodoc types.",
  "Please select .docx file for convertion.",
  "Please select a user",
  "Please select an element",
  "Please select parent language for each Starling dictionary.",
  "Please select perspective.",
  "Please sign in",
  "Please use at least one Starling column.",
  "Please, select the parent language",
  "plural",
  "Possesiv",
  "posssesiv",
  "precative",
  "predicative",
  "prefix",
  "present",
  "presenting results as online fragments of audio dictionaries and corpora which can be further edited or in the Excel file format",
  "Preview",
  "Processing",
  "Profile has been updated",
  "progressive",
  "prohibitive",
  "Project funded by grants",
  "prolative",
  "Properties",
  "Properties...",
  "Proposed variants",
  "Proprietary",
  "Proprietary license",
  "prospektiv",
  "proximal/proximate",
  "Publication date",
  "Publish",
  "Publish Entities",
  "Publish result of entity merge if any merged entity is published",
  "Published",
  "published",
  "Quantitative characteristic",
  "question particle/marker",
  "reciproc",
  "reciprocal",
  "reflexive",
  "Refresh",
  "Regexp",
  "Regular expression",
  "Reject",
  "Reject all selected",
  "Relation",
  "relative",
  "Removal date",
  "Remove",
  "Remove dictionary",
  "Remove from markup",
  "Remove from TOC",
  "Remove lexical entries",
  "Remove perspective",
  "Remove user",
  "Removing",
  "representing the dialects of various world languages",
  "Request has been sent to the grant's owner.",
  "Request has been sent to the organization's administrator.",
  "Request link",
  "Requests",
  "responsible editor of Altai dictionaries",
  "responsible editor of Ural dictionaries",
  "Result",
  "resultative",
  "results on",
  "Return to tree",
  "Role",
  "Role data loading error, please contact adiministrators.",
  "Role in the sentence",
  "Roles",
  "Rozhkov Artyom Vladimirovich",
  "Safe",
  "Save",
  "Save all",
  "Save dictionary",
  "Save markup",
  "Save only published",
  "Save sound recordings",
  "Save valency data",
  "Saving valency data",
  "Search",
  "Search and map’s creating",
  "Search for adoptions",
  "Search in",
  "Search in found",
  "Search options",
  "Search string",
  "second person",
  "Select",
  "Select a dictionary for analysis",
  "Select a license",
  "Select all",
  "Select all on current page",
  "Select audio",
  "Select authors",
  "Select data source",
  "Select Dialeqt file for import",
  "Select dictionary",
  "Select dictionary to be updated",
  "Select language",
  "Select language degree of endangerment",
  "Select Language for",
  "Select language for the new dictionary",
  "Select languages",
  "Select Parent Language",
  "Select parser",
  "Select settlement",
  "Select tags",
  "Select user",
  "Select years",
  "Select/deselect all dictionaries",
  "Select/deselect all markup",
  "selected",
  "Selected by default",
  "selected by default",
  "Selected dictionary group doesn't have multiple dictionaries with selected cognate grouping field present, cognate analysis is impossible.",
  "Separate by paragraphs",
  "Service",
  "Set corpus name, translations and metadata",
  "Set dictionary name and translations",
  "Set dictionary name, translations and metadata",
  "Set valency annotation.",
  "Settlement",
  "Severely endangered",
  "Show",
  "Show statistics",
  "Sign In",
  "Sign out",
  "Sign Up",
  "Signin failure. Either no such login/password combination exists, or this user account has been deactivated.",
  "Signup approval pending",
  "Signup success",
  "Simple",
  "single argument of canonical intransitive verb",
  "singular",
  "software for morphological analysis of glossed corpora, in particular, automatic identification of government models",
  "Sort by acceptance",
  "Sort by cases",
  "Sort by verbs",
  "Sound and markup",
  "Sound and markup compilation is being created. Check out tasks for details.",
  "Source transcription field",
  "Source transcription field selection",
  "Source translation field",
  "Source translation field selection",
  "Speech genre",
  "Split contents of the field on punctuation before matching",
  "Split contents of the field on whitespace before matching",
  "Spread",
  "Starling/CSV",
  "Start typing language name",
  "Started convertion to a new dictionary. Please check out tasks for details.",
  "Started dictionary update. Please check out tasks for details.",
  "Statistics",
  "Storage",
  "Sub string",
  "Subject",
  "subject",
  "subjunctive",
  "Submit",
  "Successfully added",
  "Successfully deleted organization",
  "Successfully removed",
  "Support",
  "Support@Telegram",
  "Sync",
  "Table of contents",
  "Tag data loading error",
  "Tapekhin Andrey Nikolaevich",
  "Tasks",
  "Tense-Aspect",
  "Text markup",
  "The entity is currently published. Click to unpublish.",
  "The entity is NOT currently published. Click to publish.",
  "The pros of the LingvoDoc platform",
  "The theme of the text",
  "The work is supported by the following grants",
  "There are unsaved changes present. Are you sure you want to discard it?",
  "There is no languages and dictionaries with chosen language degree of endangerment. The search will be performed with all languages and dictionaries.",
  "third person",
  "This entity was deleted",
  "This page is available for administrator only",
  "Time of writing",
  "Title of the work",
  "To",
  "To all entries",
  "to TOC",
  "to view.",
  "To:",
  "Tomsk State University",
  "Too broad regular expressions are not allowed",
  "Tools",
  "total",
  "Total items",
  "Transcription rules",
  "transitive",
  "Translation for",
  "Translation loading error",
  "Translations",
  "Translator",
  "transpnition marker",
  "Try reloading the page; if the error persists, please contact administrators.",
  "Type",
  "Type of discourse",
  "Type of speech",
  "Type to search",
  "unaccepted",
  "Uncheck all",
  "unique data",
  "Unique software that reproduces the experimental-phonetic, etymological and morphological work of a researcher 100 times faster",
  "Unknown dictionary",
  "Unknown grant",
  "Unknown request type!",
  "Unknown type",
  "unpublished",
  "Up",
  "Update",
  "Update dictionary",
  "Update valency data",
  "Updated valency data.",
  "Updating valency data...",
  "Upload",
  "Upload successful",
  "uploading audio files of any size, (audio)corpora in ELAN format, texts in Word .odt format",
  "URL with results of saving data should appear soon after clicking save button in the tasks",
  "User",
  "User account activation/deactivation",
  "User defined variant",
  "User options for mapping linguistic features",
  "User options for working with dictionaries",
  "User options for working with text corpora",
  "User sign-in error, please sign in; if not successful, please contact administrators.",
  "user-friendly interface for online manual word sense disambiguation which may arise after the text has been processed by the parser",
  "valence analysis",
  "Valency",
  "Valency data",
  "Valency data is being compiled. Check out tasks for details.",
  "Verb prefix filter",
  "Verb valency",
  "Verbs",
  "verbs",
  "Version",
  "View",
  "View contributions",
  "View published",
  "View suggestions",
  "vocative",
  "Voice",
  "Vulnerable",
  "web",
  "With field selection",
  "Years",
  "Yes",
  "yes",
  "You are a member",
  "You are an administrator",
  "You have selected:",
  "Your corpora is created, click",
  "Your dictionaries are scheduled for conversion. Please, check tasks tab for conversion status.",
  "Your dictionary is created, click",
  "Your dictionary is created, clickRequests",
  "Zharov Andrey Anatolievich"
];

let i18n_was_set = false;
let i18n_locale_id = null;
let i18n_locale = null;

export function getTranslation(string) {
  const translation = i18n.get(string);

  if (config.logMissingTranslations && i18n_was_set) {
    /* Development translation issues reporting. */

    if (translation === undefined) {
      // eslint-disable-next-line no-console
      console.warn(`No translation string ${JSON.stringify(string)}, please add it to stringsToTranslate[].`);
      return string;
    } else if (translation === null) {
      const locale_str = i18n_locale ? ` ${i18n_locale.intl_name}` : "";

      const locale_id_str =
        i18n_locale_id && i18n_locale_id != 2 ? ` for locale id ${i18n_locale_id}${locale_str}` : "";

      // eslint-disable-next-line no-console
      console.warn(
        `No translation for ${JSON.stringify(string)}${locale_id_str}, please add it in /edit_translations.`
      );
      return string;
    }

    return translation;
  }

  return translation == null ? string : translation;
}

export function setTranslations(translations, locales, localeId = null) {
  for (let i = 0; i < stringsToTranslate.length; i++) {
    i18n.set(stringsToTranslate[i], translations[i]);
  }

  i18n_was_set = true;
  i18n_locale_id = localeId;

  if (localeId) {
    i18n_locale = locales.find(locale => locale.id == localeId);
  }
}

const no_translation_str = "";

export function chooseTranslation(translation_dict, default_value = undefined) {
  if (!translation_dict) {
    return default_value !== undefined ? default_value : no_translation_str;
  }

  const locale_id_str = (i18n_locale_id || getLocaleId()).toString();

  const translation = translation_dict[locale_id_str];

  if (translation) {
    return translation;
  }

  /* Fallback to English, Russian and then anything we have. */

  if ("2" != locale_id_str) {
    const translation = translation_dict["2"];
    if (translation) {
      return translation;
    }
  }

  if ("1" != locale_id_str) {
    const translation = translation_dict["1"];
    if (translation) {
      return translation;
    }
  }

  for (const [locale_id_str, translation] of Object.entries(translation_dict).sort()) {
    if (translation) {
      return translation;
    }
  }

  return default_value !== undefined ? default_value : no_translation_str;
}
