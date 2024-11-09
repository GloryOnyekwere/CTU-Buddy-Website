// JavaScript for handling user interactions 

function submitQuestion() {
    // Get user input
    const userName = document.getElementById('user-name').value;
    const userQuestion = document.getElementById('user-question').value;

    // Check if input is not empty
    if (userName.trim() === '' || userQuestion.trim() === '') {
        alert('Please enter your name and question.');
        return;
    }

    // Create new message element
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');

    const userProfile = document.createElement('div');
    userProfile.classList.add('user-profile');

    const userNameElement = document.createElement('span');
    userNameElement.classList.add('user-name');
    userNameElement.textContent = userName;

    userProfile.appendChild(userNameElement);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = userQuestion;

    messageContainer.appendChild(userProfile);
    messageContainer.appendChild(messageContent);

    // Create moderation tools for new message
    const moderationTools = document.createElement('div');
    moderationTools.classList.add('moderation-tools');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editMessage(editButton);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteMessage(deleteButton);
    };

    const reportButton = document.createElement('button');
    reportButton.textContent = 'Report';
    reportButton.onclick = function () {
        reportMessage(reportButton);
    };

    moderationTools.appendChild(editButton);
    moderationTools.appendChild(deleteButton);
    moderationTools.appendChild(reportButton);

    messageContainer.appendChild(moderationTools);

    // Create reply section for new message
    const replySection = document.createElement('div');
    replySection.classList.add('reply-section');

    const replyTextarea = document.createElement('textarea');
    replyTextarea.placeholder = 'Reply here...';

    const replyButton = document.createElement('button');
    replyButton.textContent = 'Reply';
    replyButton.onclick = function () {
        replyToMessage(replyButton);
    };

    replySection.appendChild(replyTextarea);
    replySection.appendChild(replyButton);

    messageContainer.appendChild(replySection);

    // Append new message to thread container
    document.getElementById('thread-container').appendChild(messageContainer);

    // Clear input fields
    document.getElementById('user-name').value = '';
    document.getElementById('user-question').value = '';
}

function replyToMessage(button) {
    const replyTextarea = button.previousElementSibling;
    const replyText = replyTextarea.value.trim();

    if (replyText === '') {
        alert('Please enter a reply.');
        return;
    }

    // Create new reply message element
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');

    const userProfile = document.createElement('div');
    userProfile.classList.add('user-profile');

    const userNameElement = document.createElement('span');
    userNameElement.classList.add('user-name');
    userNameElement.textContent = 'Anonymous';

    userProfile.appendChild(userNameElement);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = replyText;

    messageContainer.appendChild(userProfile);
    messageContainer.appendChild(messageContent);

    // Create moderation tools for new reply
    const moderationTools = document.createElement('div');
    moderationTools.classList.add('moderation-tools');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editMessage(editButton);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteMessage(deleteButton);
    };

    const reportButton = document.createElement('button');
    reportButton.textContent = 'Report';
    reportButton.onclick = function () {
        reportMessage(reportButton);
    };

    moderationTools.appendChild(editButton);
    moderationTools.appendChild(deleteButton);
    moderationTools.appendChild(reportButton);

    messageContainer.appendChild(moderationTools);

    // Append new reply to the current thread
    button.closest('.message').appendChild(messageContainer);

    // Clear the reply textarea
    replyTextarea.value = '';
}

function editMessage(button) {
    const messageContent = button.parentElement.previousElementSibling;
    const currentText = messageContent.textContent;

    const newText = prompt('Edit your message:', currentText);
    if (newText !== null) {
        messageContent.textContent = newText;
    }
}

function deleteMessage(button) {
    const message = button.closest('.message');
    if (confirm('Are you sure you want to delete this message?')) {
        message.remove();
    }
}

function reportMessage(button) {
    const messageContent = button.parentElement.previousElementSibling.textContent;
    alert('Reported message: ' + messageContent);
}
