import React from 'react'
import './Editor.css'
import MDEditor, { commands } from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { HeadingIcon } from "../../assets/markdown/HeadingIcon";
import {
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
} from "./CustomIcons";

function NewEditor({ currentNote, updateNote }) {
  return (
    <section
      className="container new-editor-container"
      // data-color-mode="dark"
    >
      <MDEditor
        value={currentNote.body}
        onChange={updateNote}
        height="100%"
        highlightEnable={false}
        commands={[
          editPreviewCommand,
          customPreviewCommand,
          commands.group(
            [
              commands.title1,
              commands.title2,
              commands.title3,
              commands.title4,
              commands.title5,
              commands.title6,
            ],
            {
              name: "title",
              groupName: "title",
              buttonProps: { "aria-label": "Insert title" },
              icon: <HeadingIcon />,
            }
          ),
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
          commands.divider,
          customOrderedListCommand,
          customUnorderedListCommand,
          customCheckedListCommand,
          commands.divider,
          customHelpCommand,
        ]}
        extraCommands={[customSplitScreenCommand, customMaximiseCommand]}
        preview="live"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
    </section>
  );
}

export default NewEditor
