export default {
    commons: {
        true: 'true',
        false: 'false',
        button: {
            create: 'Create',
            add: 'Add',
            save: 'Save',
            set: 'Reset',
            sync: 'Sync',
            delete: 'Delete',
            edit: 'Edit',
            enable: 'Enable',
            disable: 'Disable',
            confirm: 'Confirm',
            cancel: 'Cancel',
            reset: 'Reset',
            conn: 'Connect',
            disconn: 'Disconnect',
            clean: 'Clean',
            login: 'Login',
            close: 'Close',
            view: 'View',
            watch: 'Watch',
            handle: 'Handle',
            expand: 'Expand',
            log: 'Log',
            back: 'Back',
            recover: 'Recover',
            upload: 'Upload',
            download: 'Download',
            init: 'Init',
            verify: 'Verify',
            saveAndEnable: 'Save and enable',
        },
        search: {
            timeStart: 'Time start',
            timeEnd: 'Time end',
            timeRange: 'To',
            dateStart: 'Date start',
            dateEnd: 'Date end',
        },
        table: {
            total: 'Total {0}',
            name: 'Name',
            type: 'Type',
            status: 'Status',
            statusSuccess: 'Success',
            statusFailed: 'Failed',
            records: 'Records',
            group: 'Group',
            createdAt: 'Creation Time',
            date: 'Date',
            updatedAt: 'Update Time',
            operate: 'Operations',
            message: 'Message',
            description: 'Description',
            interval: 'Interval',
        },
        msg: {
            delete: 'This operation cannot be rolled back. Do you want to continue',
            deleteTitle: 'Delete',
            deleteSuccess: 'Delete Success',
            loginSuccess: 'Login Success',
            operationSuccess: 'Successful operation',
            notSupportOperation: 'This operation is not supported',
            requestTimeout: 'The request timed out, please try again later',
            infoTitle: 'Hint',
            notRecords: 'No execution record is generated for the current task',
            sureLogOut: 'Are you sure you want to log out?',
            createSuccess: 'Create Success',
            updateSuccess: 'Update Success',
            uploadSuccess: 'Update Success',
            operate: 'Operate',
        },
        login: {
            firstLogin: 'First login, please create an initial administrator user!',
            username: 'UserName',
            password: 'Password',
            rePassword: 'Confirm Password',
            welcome: 'Welcome back, please enter your username and password to log in!',
            captchaHelper: 'Please enter the verification code',
            safeEntrance: 'Please use the correct entry to log in to the panel',
            reason: 'Cause of error:',
            reasonHelper:
                'At present, the newly installed machine has enabled the security entrance login. The newly installed machine will have a random 8-character security entrance name, which can also be modified in the panel Settings. If you do not record or do not remember, you can use the following methods to solve the problem',
            solution: 'The solution:',
            solutionHelper:
                'Run the following command on the SSH terminal to solve the problem: 1. View the /etc/init.d/bt default command on the panel',
            warnning:
                'Note: [Closing the security entrance] will make your panel login address directly exposed to the Internet, very dangerous, please exercise caution',
            codeInput: 'Please enter the 6-digit verification code of the MFA validator',
        },
        rule: {
            username: 'Please enter a username',
            password: 'Please enter a password',
            rePassword: 'The passwords are inconsistent. Please check and re-enter the password',
            requiredInput: 'Please enter the required fields',
            requiredSelect: 'Please select the required fields',
            commonName: 'Support English, Chinese, numbers, .-_, length 1-30',
            complexityPassword:
                'Please enter a password with more than 8 characters and must contain letters, digits, and special symbols',
            commonPassword: 'Please enter a password with more than 6 characters',
            email: 'Email format error',
            number: 'Please enter the correct number',
            ip: 'Please enter the correct IP address',
            port: 'Please enter the correct port',
            selectHelper: 'Please select the correct {0} file',
        },
        res: {
            paramError: 'The request failed, please try again later!',
            forbidden: 'The current user has no permission',
            serverError: 'Service exception',
            notFound: 'The resource does not exist',
            commonError: 'The request failed',
        },
        header: {
            language: 'Internationalization',
            zh: '简体中文',
            en: 'English',
            theme: 'Layout Settings',
            globalTheme: 'Global',
            themeColor: 'Theme Color',
            darkTheme: 'Dark Theme',
            personalData: 'Personal Data',
            changePassword: 'Change Password',
            logout: 'Logout',
        },
    },
    menu: {
        home: 'Overview',
        apps: 'App Store',
        website: 'Website',
        project: 'Project',
        config: 'Config',
        firewall: 'Firewall',
        database: 'Database',
        container: 'Container',
        cronjob: 'Cronjob',
        host: 'Host',
        security: 'Security',
        files: 'File Management',
        monitor: 'Monitor',
        terminal: 'Terminal',
        settings: 'Setting',
        toolbox: 'Toolbox',
        logs: 'Log',
    },
    home: {
        welcome: 'Welcome',
    },
    tabs: {
        more: 'More',
        closeCurrent: 'Close current',
        closeOther: 'Close other',
        closeAll: 'Close All',
    },
    header: {
        logout: 'Logout',
    },
    database: {
        create: 'Create database',
        noMysql: 'No {0} database is detected, please go to App Store and click Install!',
        goInstall: 'Go to install',
        source: 'Source',
        backup: 'Database backup',
        permission: 'Permission',
        permissionLocal: 'Local server',
        permissionForIP: 'IP',
        permissionAll: 'All of them (unsafe)',
        rootPassword: 'Root password',
        backupList: 'Backup list',
        backList: 'Return',
        loadBackup: 'Import the backup',
        setting: 'Database Settings',
        remoteAccess: 'Remote access',
        changePassword: 'Password change',

        baseSetting: 'infrastructure',
        remoteConnHelper:
            'Remote connection to mysql as user root may have security risks. Therefore, perform this operation with caution.',
        confChange: 'Configuration change',
        portHelper:
            'This port is the exposed port of the container. You need to save the modification separately and restart the container!',

        unSupportType: 'Current file type is not supported!',
        unSupportSize: 'The uploaded file exceeds 10M, please confirm!',
        selectFile: 'Select file',
        supportUpType: 'Only sql, zip, sql.gz, and (tar.gz gz tgz) files within 10 MB are supported',
        zipFormat:
            'zip, tar.gz compressed package structure: test.zip or test.tar.gz compressed package must contain test.sql',

        currentStatus: 'Current state',
        runTime: 'Startup time',
        connections: 'Total connections',
        bytesSent: 'Send bytes',
        bytesReceived: 'Received bytes',
        queryPerSecond: 'Query per second',
        txPerSecond: 'Tx per second',
        connInfo: 'active/peak connections',
        connInfoHelper: 'If the value is too large, increase max_connections',
        threadCacheHit: 'Thread cache hit',
        threadCacheHitHelper: 'If it is too low, increase thread_cache_size',
        indexHit: 'Index hit',
        indexHitHelper: 'If it is too low, increase key_buffer_size',
        innodbIndexHit: 'Innodb 索引命中率',
        innodbIndexHitHelper: 'If it is too low, increase innodb_buffer_pool_size',
        cacheHit: 'Querying the Cache Hit',
        cacheHitHelper: 'If it is too low, increase query_cache_size',
        tmpTableToDB: 'Temporary table to disk',
        tmpTableToDBHelper: 'If it is too large, try increasing tmp_table_size',
        openTables: 'Open tables',
        openTablesHelper: 'The configuration value of table_open_cache must be greater than or equal to this value',
        selectFullJoin: 'Select full join',
        selectFullJoinHelper: 'If the value is not 0, check whether the index of the data table is correct',
        selectRangeCheck: 'The number of joins with no index',
        selectRangeCheckHelper: 'If the value is not 0, check whether the index of the data table is correct',
        sortMergePasses: 'Number of sorted merges',
        sortMergePassesHelper: 'If the value is too large, increase sort_buffer_size',
        tableLocksWaited: 'Lock table number',
        tableLocksWaitedHelper: 'If the value is too large, consider increasing your database performance',

        performanceTuning: 'Performance tuning',
        optimizationScheme: 'Optimization scheme',
        keyBufferSizeHelper: 'Buffer size for index',
        queryCacheSizeHelper: 'Query cache. If this function is disabled, set this parameter to 0',
        tmpTableSizeHelper: 'Temporary table cache size',
        innodbBufferPoolSizeHelper: 'Innodb buffer size',
        innodbLogBufferSizeHelper: 'Innodb log buffer size',
        sortBufferSizeHelper: '* connections, buffer size per thread sort',
        readBufferSizeHelper: '* connections, read buffer size',
        readRndBufferSizeHelper: '* connections, random read buffer size',
        joinBufferSizeHelper: '* connections, association table cache size',
        threadStackelper: '* connections, stack size per thread',
        binlogCacheSizeHelper: '* onnections, binary log cache size (multiples of 4096)',
        threadCacheSizeHelper: 'Thread pool size',
        tableOpenCacheHelper: 'Table cache',
        maxConnectionsHelper: 'Max connections',
        restart: 'Restart',

        isOn: 'Is on',
        longQueryTime: 'Slow query threshold',

        status: 'The current state',
        terminal: 'Terminal mode',
        second: 'Second',
        timeout: 'Timeout',
        timeoutHelper: 'Idle connection timeout period. 0 indicates that the connection is on continuously',
        maxclients: 'Max clients',
        requirepass: 'Password',
        requirepassHelper: 'Leaving a blank indicates that no password has been set',
        databases: 'Number of databases',
        maxmemory: 'Maximum memory usage',
        maxmemoryHelper: '0 indicates no restriction',
        tcpPort: 'Current listening port',
        uptimeInDays: 'Days in operation',
        connectedClients: 'Number of connected clients',
        usedMemory: 'Redis indicates the peak value of memory allocated historically',
        usedMemoryRss: 'Total system memory used by Redis',
        memFragmentationRatio: 'Memory fragmentation ratio',
        totalConnectionsReceived: 'Total number of clients connected since run',
        totalCommandsProcessed: 'The total number of commands executed since the run',
        instantaneousOpsPerSec: 'Number of commands executed by the server per second',
        keyspaceHits: 'The number of times a database key was successfully found',
        keyspaceMisses: 'Number of failed attempts to find the database key',
        hit: 'Find the database key hit ratio',
        latestForkUsec: 'The number of microseconds spent on the last fork() operation',

        recoverHelper: 'Data is about to be overwritten with [{0}]. Do you want to continue?',
        submitIt: 'Overwrite the data',

        baseConf: 'Basic configuration',
        allConf: 'All configuration',
        restartNow: 'Restart now',
        restartNowHelper1:
            'You need to restart the system after the configuration changes take effect. If your data needs to be persisted, perform the save operation first.',
        restartNowHelper: 'The modification takes effect only after the system restarts.',

        persistence: 'Persistence',
        rdbHelper1: 'In seconds, insert',
        rdbHelper2: 'The data',
        rdbHelper3: 'Meeting either condition triggers RDB persistence',
        rdbInfo: 'Rule list has 0 value, please confirm and try again!',
    },
    container: {
        operatorHelper: '{0} will be performed on the selected container. Do you want to continue?',
        start: 'Start',
        stop: 'Stop',
        reStart: 'Restart',
        kill: 'Kill',
        pause: 'Pause',
        unpause: 'Unpause',
        rename: 'Rename',
        remove: 'Remove',
        container: 'Container',
        upTime: 'UpTime',
        all: 'All',
        lastDay: 'Last Day',
        last4Hour: 'Last 4 Hours',
        lastHour: 'Last Hour',
        last10Min: 'Last 10 Minutes',

        custom: 'Custom',
        containerTerminal: 'Container terminal',

        containerCreate: 'Container create',
        port: 'Port',
        exposePort: 'Expose port',
        exposeAll: 'Expose all',
        containerPort: 'Container port',
        serverPort: 'Host port',
        cmd: 'Command',
        cmdHelper: 'one in a row, for example, echo "hello"',
        autoRemove: 'Auto remove',
        cpuQuota: 'NacosCPU',
        memoryLimit: 'Memory',
        limitHelper: 'If the limit is 0, the limit is turned off',
        mount: 'Mount',
        serverPath: 'Server path',
        containerDir: 'Container path',
        modeRW: 'Read-Write',
        modeR: 'Read-Only',
        mode: 'Mode',
        env: 'Environment',
        restartPolicy: 'Restart policy',
        unlessStopped: 'unless-stopped',
        onFailure: 'on-failure（five times by default）',
        no: 'no',

        image: 'Image',
        imagePull: 'Image pull',
        imagePush: 'Image push',
        repoName: 'Repo Name',
        imageName: 'Image name',
        pull: 'Pull',
        path: 'Path',
        importImage: 'Image import',
        import: 'Import',
        build: 'Build',
        imageBuild: 'Image build',
        label: 'Label',
        push: 'Push',
        fileName: 'FileName',
        export: 'Export',
        exportImage: 'Image export',
        version: 'Version',
        size: 'Size',
        from: 'From',
        tag: 'Tag',
        tagHelper: 'one in a row, for example, key=value',
        imageNameHelper: 'Image name and Tag, for example: nginx:latest',

        network: 'Network',
        createNetwork: 'Create network',
        networkName: 'Name',
        driver: 'Driver',
        option: 'Option',
        attachable: 'Attachable',
        subnet: 'Subnet',
        scope: 'IP Scope',
        gateway: 'Gateway',

        monitor: 'Monitor',
        refreshTime: 'Refresh time',
        cache: 'Cache',

        volume: 'Volume',
        volumeName: 'Name',
        mountpoint: 'Mountpoint',
        createVolume: 'Create volume',

        repo: 'Repo',
        name: 'Name',
        protocol: 'protocol',
        downloadUrl: 'Download URL',
        imageRepo: 'Image repo',
        repoHelper: 'Does it include a mirror repository/organization/project?',
        auth: 'Auth',

        compose: 'Compose',
        composeTemplate: 'Compose template',
        description: 'Description',
        content: 'Content',
        containerNumber: 'Container number',
        down: 'Down',
        up: 'Up',
        operatorComposeHelper: '{0} will be performed on the selected compose. Do you want to continue?',
    },
    cronjob: {
        cronTask: 'Task',
        taskType: 'Task type',
        shell: 'shell',
        website: 'website',
        rulesHelper: 'Compression exclusion rules (with; Is a delimiter), for example: \n*.log; *.sql',
        lastRecrodTime: 'Last execution time',
        failedFilter: 'Failed Task Filtering',
        all: 'all',
        database: 'database',
        missBackupAccount: 'The backup account could not be found',
        syncDate: 'Synchronization time ',
        releaseMemory: 'Free memory',
        curl: 'Crul',
        taskName: 'Task name',
        cronSpec: 'Lifecycle',
        directory: 'Backup directory',
        sourceDir: 'Backup directory',
        exclusionRules: 'Exclusive rule',
        url: 'URL Address',
        target: 'Target',
        retainCopies: 'Retain copies',
        cronSpecRule: 'Please enter a correct lifecycle',
        perMonth: 'Per monthly',
        perWeek: 'Per week',
        perHour: 'Per hour',
        perNDay: 'Every N days',
        perNHour: 'Every N hours',
        perNMinute: 'Every N minutes',
        per: 'Every ',
        handle: 'Handle',
        day: 'Day',
        day1: 'Day',
        hour: ' Hour',
        minute: ' Minute',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        shellContent: 'Script content',
        errRecord: 'Incorrect logging',
        errHandle: 'Task execution failure',
        noRecord: 'The execution did not generate any logs',
    },
    monitor: {
        avgLoad: 'Average load',
        loadDetail: 'Load detail',
        resourceUsage: 'Resource utilization rate',
        min: 'Minutes',
        read: 'Read',
        write: 'Write',
        count: 'Times',
        readWriteCount: 'Read or write Times',
        readWriteTime: 'Read or write delay',
        today: 'Today',
        yestoday: 'Yestoday',
        lastNDay: 'Last {0} day',
        memory: 'Memory',
        disk: 'Disk',
        network: 'Network',
        up: 'Up',
        down: 'Down',
    },
    terminal: {
        conn: 'connection',
        testConn: 'Test connection',
        saveAndConn: 'Save and Connect',
        connTestOk: 'Connection information available',
        hostList: 'Host information',
        createConn: 'Create a connection',
        createGroup: 'Create a group',
        expand: 'Expand all',
        fold: 'All contract',
        batchInput: 'Batch input',
        quickCommand: 'quick command',
        groupDeleteHelper:
            'After the group is removed, all connections in the group will be migrated to the default group. Confirm the information',
        quickCmd: 'Quick command',
        addHost: 'Add Host',
        localhost: 'Localhost',
        name: 'Name',
        port: 'Port',
        user: 'User',
        authMode: 'Auth Mode',
        passwordMode: 'password',
        keyMode: 'PrivateKey',
        password: 'Password',
        key: 'Private Key',
        emptyTerminal: 'No terminal is currently connected',
    },
    operations: {
        operation: 'Operation logs',
        login: 'Login logs',
        system: 'System logs',
        loginIP: 'Login IP',
        loginAddress: 'Login address',
        loginAgent: 'Login agent',
        loginStatus: 'Login status',
        detail: {
            users: 'User',
            hosts: 'Host',
            groups: 'Group',
            commands: 'Command',
            backups: 'Backup Account',
            settings: 'Panel Setting',
            cronjobs: 'Cronjob',
            databases: 'Database',
            status: ' Update status',
            auth: 'User',
            login: ' login',
            logout: ' logout',
            post: ' create',
            put: ' update',
            update: ' update',
            delete: ' delete',
            del: 'delete',
        },
        status: 'status',
        request: 'request',
        response: 'response',
    },
    file: {
        dir: 'folder',
        upload: 'Upload',
        download: 'Download',
        fileName: 'file name',
        search: 'find',
        mode: 'permission',
        owner: 'owner',
        file: 'file',
        remoteFile: 'remote download',
        share: 'Share',
        sync: 'Data synchronization',
        size: 'size',
        updateTime: 'Modification time',
        open: 'open',
        rename: 'rename',
        role: 'authority',
        info: 'Properties',
        linkFile: 'soft link file',
        terminal: 'terminal',
        shareList: 'Share List',
        zip: 'compress',
        user: 'User',
        group: 'user group',
        path: 'path',
        public: 'public',
        setRole: 'Set permissions',
        link: 'Whether to link',
        rRole: 'read',
        wRole: 'Write',
        xRole: 'executable',
        name: 'name',
        compress: 'compress',
        deCompress: 'Decompress',
        compressType: 'compression format',
        compressDst: 'compression path',
        replace: 'Overwrite existing file',
        compressSuccess: 'Compression successful',
        deCompressSuccess: 'Decompression succeeded',
        deCompressDst: 'Decompression path',
        linkType: 'Link type',
        softLink: 'soft link',
        hardLink: 'hard link',
        linkPath: 'Link path',
        selectFile: 'Select file',
        downloadSuccess: 'Download successful',
        downloadUrl: 'download URL',
        downloadStart: 'Download started!',
        moveStart: 'Move start',
        move: 'Move',
        copy: 'Cpoy',
        calculate: 'Calculate',
        canNotDeCompress: 'Can not DeCompress this File',
        uploadSuccess: 'Upload Success!',
        downloadProcess: 'Download Process',
        downloading: 'Downloading...',
    },
    setting: {
        all: 'All',
        panel: 'Panel',
        emailHelper: 'For password retrieval',
        title: 'Panel alias',
        theme: 'Theme',
        dark: 'Dark',
        light: 'Light',
        language: 'Language',
        languageHelper:
            'By default, it follows the browser language. This parameter takes effect only on the current browser',
        sessionTimeout: 'Timeout',
        sessionTimeoutHelper:
            'If you do not operate the panel for more than {0} seconds, the panel automatically logs out',
        syncTime: 'Synchronization time',
        changePassword: 'Password change',
        oldPassword: 'Original password',
        newPassword: 'New password',
        retryPassword: 'Confirm password',

        backup: 'Backup',
        noTypeForCreate: 'No backup type is currently created',
        serverDisk: 'Server disks',
        OSS: 'Ali OSS',
        S3: 'Amazon S3',
        backupAccount: 'Backup account',
        loadBucket: 'Get bucket',
        accountName: 'Account name',
        accountKey: 'Account key',
        address: 'Address',
        port: 'Port',
        username: 'Username',
        password: 'Password',
        path: 'Path',

        safe: 'Safe',
        panelPort: 'Panel port',
        portHelper:
            'The recommended port range is 8888 to 65535. Note: If the server has a security group, permit the new port from the security group in advance',
        safeEntrance: 'Security entrance',
        safeEntranceHelper:
            'Panel management portal. You can log in to the panel only through a specified security portal, for example: onepanel',
        expirationTime: 'Expiration Time',
        days: 'Expiration Days',
        expiredHelper: 'The current password has expired. Please change the password again.',
        timeoutHelper:
            '[ {0} days ] The panel password is about to expire. After the expiration, you need to reset the password',
        complexity: 'Complexity verification',
        complexityHelper:
            'The password must contain at least eight characters and contain at least three uppercase letters, lowercase letters, digits, and special characters',
        mfa: 'MFA',
        mfaHelper1: 'Download a MFA verification mobile app such as:',
        mfaHelper2: 'Scan the following QR code using the mobile app to obtain the 6-digit verification code',
        mfaHelper3: 'Enter six digits from the app',

        enableMonitor: 'Enable',
        storeDays: 'Expiration time (day)',
        cleanMonitor: 'Clearing monitoring records',

        message: 'Message',
        messageType: 'Message type',
        email: 'Email',
        wechat: 'WeChat',
        dingding: 'DingDing',
        closeMessage: 'Turning off Message Notification',
        emailServer: 'Service name',
        emailAddr: 'Service address',
        emailSMTP: 'SMTP code',
        secret: 'Secret',

        about: 'About',
        project: 'Project Address',
        issue: 'Feedback',
        chat: 'Community Discussion',
        star: 'Star',
        description: '1Panel, A modern open source Linux panel.',
    },
    app: {
        installed: 'installed',
        all: 'all',
        version: 'version',
        detail: 'detail',
        install: 'install',
        author: 'author',
        source: 'source',
        sync: 'sync',
        appName: 'App Name',
        status: 'status',
        container: 'Container',
        restart: 'Restart',
        up: 'Start',
        down: 'Stop',
        name: 'Name',
        description: 'Description',
        delete: 'Delete',
        deleteWarn:
            'Delete the operation data and delete the operation data. This operation cannot be rolled back. Do you want to continue?',
        canUpdate: 'CanUpdate',
        backup: 'Backup',
        backupName: 'Filename',
        backupPath: 'Filepath',
        backupdate: 'Backup Date',
        restore: 'Restore',
        restoreWarn:
            'The rollback operation will restart the application and replace the data. This operation cannot be rolled back. Do you want to continue?',
        update: 'Update',
        versioneSelect: 'Please Select version',
    },
};
