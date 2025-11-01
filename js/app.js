    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        
        notificationText.textContent = message;
        notification.className = `notification show ${type}`;
        
        // Try to show browser notification
        this.showBrowserNotification(message, type);
        
        // Play notification sound
        this.playNotificationSound(type);
        
        setTimeout(() => {
            this.hideNotification();
        }, 5000);
    }
    
    showBrowserNotification(message, type) {
        // Check if browser supports notifications and user has granted permission
        if ('Notification' in window && Notification.permission === 'granted') {
            const title = this.translations[this.currentLang].appTitle;
            const options = {
                body: message,
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9IiMyRTdEMzIiLz4KPHN2ZyB4PSI0OCIgeT0iNDgiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0xMiAyQzEwLjkgMiAxMCAyLjkgMTAgNFY2SDVDMy45IDYgMyA2LjkgMyA4VjE5QzMgMjAuMSAzLjkgMjEgNSAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWOEMyMSA2LjkgMjAuMSA2IDE5IDZIMTRWNEMxNCAyLjkgMTMuMSAyIDEyIDJaTTEyIDRWMTZDMTEgMTYgMTAuMjUgMTYuNDIgOS44MSAxNy4wOUw5IDE2TDEwLjUgMTRDMTAuNSAxMi45IDExLjIgMTIuMiAxMi4yIDEyLjJIMTJWNFpNNyAxMFYxMkgxMFYxMEg3Wk0xNyAxMFYxMkgxNFYxMEgxN1oiLz4KPC9zdmc+Cjwvc3ZnPgo=',
                badge: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiByeD0iMTYiIGZpbGw9IiMyRTdEMzIiLz4KPHN2ZyB4PSIxOCIgeT0iMTgiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0xMiAyQzEwLjkgMiAxMCAyLjkgMTAgNFY2SDVDMy45IDYgMyA2LjkgMyA4VjE5QzMgMjAuMSAzLjkgMjEgNSAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWOEMyMSA2LjkgMjAuMSA2IDE5IDZIMTRWNEMxNCAyLjkgMTMuMSAyIDEyIDJaTTEyIDRWMTZDMTEgMTYgMTAuMjUgMTYuNDIgOS44MSAxNy4wOUw5IDE2TDEwLjUgMTRDMTAuNSAxMi45IDExLjIgMTIuMiAxMi4yIDEyLjJIMTJWNFpNNyAxMFYxMkgxMFYxMEg3Wk0xNyAxMFYxMkgxNFYxMEgxN1oiLz4KPC9zdmc+Cjwvc3ZnPgo=',
                tag: type,
                timestamp: Date.now()
            };
            
            new Notification(title, options);
        } else if ('Notification' in window && Notification.permission === 'default') {
            // Request permission if not granted
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    this.showBrowserNotification(message, type);
                }
            });
        }
    }
