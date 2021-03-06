"use strict";
var ngmodule_1 = require("../bootstrap/ngmodule");
var compose_component_1 = require("./compose.component");
var folderList_component_1 = require("./directives/folderList.component");
var message_component_1 = require("./message.component");
var messageList_component_1 = require("./messageList.component");
var mymessages_component_1 = require("./mymessages.component");
var messageTable_component_1 = require("./directives/messageTable.component");
var sortMessages_directive_1 = require("./directives/sortMessages.directive");
var messageBody_filter_1 = require("./filters/messageBody.filter");
var messagesListUI_service_1 = require("./services/messagesListUI.service");
var mymessages_states_1 = require("./mymessages.states");
var mymessagesAppModule = {
    directives: { sortMessages: sortMessages_directive_1.sortMessages },
    components: { compose: compose_component_1.compose, folderList: folderList_component_1.folderList, message: message_component_1.message, messageList: messageList_component_1.messageList, mymessages: mymessages_component_1.mymessages, messageTable: messageTable_component_1.messageTable },
    states: [mymessages_states_1.composeState, mymessages_states_1.messageState, mymessages_states_1.messageListState, mymessages_states_1.mymessagesState],
    filters: { messageBody: messageBody_filter_1.messageBody },
    services: { MessageListUI: messagesListUI_service_1.MessageListUI }
};
ngmodule_1.loadNg1AppModule(ngmodule_1.ngmodule, mymessagesAppModule);
//# sourceMappingURL=index.js.map