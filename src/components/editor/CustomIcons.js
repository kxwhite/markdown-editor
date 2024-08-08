import { EditorContext, commands } from "@uiw/react-md-editor";
import "./Editor.css";
import { useContext } from "react";
import { BoldIcon } from "../../assets/markdown/BoldIcon";
import { ItalicIcon } from "../../assets/markdown/ItalicIcon";
import { StrikethroughIcon } from "../../assets/markdown/StrikethroughIcon";
import { QuoteIcon } from "../../assets/markdown/QuoteIcon";
import { CodeIcon } from "../../assets/markdown/CodeIcon";
import { LinkIcon } from "../../assets/markdown/LinkIcon";
import { OrderedListIcon } from "../../assets/markdown/OrderedListIcon";
import { UnorderedListIcon } from "../../assets/markdown/UnorderedListIcon";
import { CheckedListIcon } from "../../assets/markdown/CheckedListIcon";
import { HRIcon } from "../../assets/markdown/HRIcon";
import { CodeBlockIcon } from "../../assets/markdown/CodeBlockIcon";
import { CommentIcon } from "../../assets/markdown/CommentIcon";
import { ImageIcon } from "../../assets/markdown/ImageIcon";
import { TableIcon } from "../../assets/markdown/TableIcon";
import { HelpIcon } from "../../assets/markdown/HelpIcon";
import { SplitScreenIcon } from "../../assets/markdown/SplitScreenIcon";
import { MaxScreenIcon } from "../../assets/markdown/MaxScreenIcon";

const WriteButton = () => {
  const { preview, dispatch } = useContext(EditorContext);

  const click = () => {
    if (dispatch) {
      dispatch({
        preview: "edit",
      });
    }
  };
  return (
    <span
      style={{
        backgroundColor: preview === "edit" ? "#212431" : "#232936",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: preview === "edit" ? "8px" : "0px",
        borderRight: preview === "edit" ? "1px solid #30363D" : "none",
        padding: "11px 16px 12px 16px",
        fontSize: "14px",
      }}
      onClick={click}
    >
      Write
    </span>
  );
};

const PreviewButton = () => {
  const { preview, dispatch } = useContext(EditorContext);
  const click = () => {
    if (dispatch) {
      dispatch({
        preview: "preview",
      });
    }
  };
  return (
    <span
      style={{
        backgroundColor: preview === "preview" ? "#212431" : "#232936",
        borderTopLeftRadius: preview === "preview" ? "8px" : "0px",
        borderTopRightRadius: preview === "preview" ? "8px" : "0px",
        borderRight: preview === "preview" ? "1px solid #30363D" : "none",
        borderLeft: preview === "preview" ? "1px solid #30363D" : "none",
        padding: "11px 16px 12px 16px",
        fontSize: "14px",
      }}
      onClick={click}
    >
      Preview
    </span>
  );
};

const editPreviewCommand = {
  name: "edit-preview",
  keyCommand: "edit-preview",
  buttonProps: { "aria-label": "Generate Edit" },
  icon: <WriteButton />,
};

const customPreviewCommand = {
  name: "custom-preview",
  keyCommand: "custom-preview",
  buttonProps: { "aria-label": "Generate Preview" },
  icon: <PreviewButton />,
};

const customBoldCommand = {
  ...commands.bold,
  icon: <BoldIcon />,
};

const customItalicCommand = {
  ...commands.italic,
  icon: <ItalicIcon />,
};

const customStrikethroughCommand = {
  ...commands.strikethrough,
  icon: <StrikethroughIcon />,
};

const customHRCommand = {
  ...commands.hr,
  icon: <HRIcon />,
};

const customLinkCommand = {
  ...commands.link,
  icon: <LinkIcon />,
};

const customQuoteCommand = {
  ...commands.quote,
  icon: <QuoteIcon />,
};

const customCodeCommand = {
  ...commands.code,
  icon: <CodeIcon />,
};

const customCodeBlockCommand = {
  ...commands.codeBlock,
  icon: <CodeBlockIcon />,
};


const customCommentCommand = {
  ...commands.comment,
  icon: <CommentIcon />,
};

const customImageCommand = {
  ...commands.comment,
  icon: <ImageIcon />,
};

const customTableCommand = {
  ...commands.table,
  icon: <TableIcon />,
};

const customOrderedListCommand = {
  ...commands.orderedListCommand,
  icon: <OrderedListIcon />,
};

const customUnorderedListCommand = {
  ...commands.unorderedListCommand,
  icon: <UnorderedListIcon />,
};

const customCheckedListCommand = {
  ...commands.checkedListCommand,
  icon: <CheckedListIcon />,
};

const customHelpCommand = {
  ...commands.help,
  icon: <HelpIcon />,
};

const customSplitScreenCommand = {
  ...commands.codeLive,
  icon: <SplitScreenIcon />,
};

const customMaximiseCommand = {
  ...commands.fullscreen,
  icon: <MaxScreenIcon />,
};

export {
  editPreviewCommand,
  customPreviewCommand,
  customBoldCommand,
  customItalicCommand,
  customStrikethroughCommand,
  customHRCommand,
  customLinkCommand,
  customQuoteCommand,
  customCodeCommand,
  customCodeBlockCommand,
  customCommentCommand,
  customImageCommand,
  customTableCommand,
  customOrderedListCommand,
  customUnorderedListCommand,
  customCheckedListCommand,
  customHelpCommand,
  customSplitScreenCommand,
  customMaximiseCommand,
};
