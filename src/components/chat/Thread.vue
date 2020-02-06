<template>
  <v-content class="chatThread">
    <v-list two-line>
      <v-list-item-group multiple>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>
              <v-list-item-subtitle class="text--primary" v-text="item.from"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="item.message"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="formatDate(item.date)"></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="index + 1 < items.length" :key="'divider_' + index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-list-item v-if="isLoading === true">
      <v-list-item-content>
        <v-list-item-subtitle class="text-center">
          <Loading />
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-if="isLoading === false && items.length === 0">
      <v-list-item-content>
        <v-list-item-subtitle class="text-center">{{ $_('CHATBOX_NO_MESSAGES') }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-content>
</template>

<script>
  import Loading from '@/handlers/utils/Loading';

  export default {
    name: 'ChatThread',
    components: {
      Loading
    },
    props: {
      items: Array
    },
    data: () => ({
      isLoading: true
    }),
    methods: {
      formatDate(date_sent) {
        const dateSent = new Date(date_sent);
        const unixTimeDiff = (new Date().getTime() - dateSent.getTime()) / 100;
        const seconds = unixTimeDiff && Math.round(unixTimeDiff / 60);
        const minutes = seconds > 60 && Math.round(seconds / 60);
        const hours = minutes > 60 && Math.round(minutes / 60);
        const date = hours > 24 && `${dateSent.getDay() < 9 && '0' + dateSent.getDay()}/${dateSent.getMonth() < 9 && '0' + dateSent.getMonth()}`;
        return date
          || (hours ? `${hours}h` : null)
          || (minutes ? `${minutes}m` : null)
          || (seconds ? `${seconds}s` : null);
      }
    },
    watch: {
      items() {
        this.isLoading = false;
      }
    }
  };
</script>
